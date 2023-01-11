import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BrandingSettings } from "./brandingsettings";
import { PlanDetails } from "./plandetails";
import { Quota } from "./quota";



export class AccountAttributesAllowedIp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ipEnd" })
  ipEnd?: string;

  @SpeakeasyMetadata({ data: "json, name=ipStart" })
  ipStart?: string;
}


export class AccountAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=accountOnboarding" })
  accountOnboarding?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowedIp", elemType: AccountAttributesAllowedIp })
  allowedIp?: AccountAttributesAllowedIp[];

  @SpeakeasyMetadata({ data: "json, name=branding" })
  branding?: boolean;

  @SpeakeasyMetadata({ data: "json, name=brandingSettings" })
  brandingSettings?: BrandingSettings;

  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: number;

  @SpeakeasyMetadata({ data: "json, name=complexPasswords" })
  complexPasswords?: boolean;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=customDomain" })
  customDomain?: boolean;

  @SpeakeasyMetadata({ data: "json, name=customSignature" })
  customSignature?: string;

  @SpeakeasyMetadata({ data: "json, name=externalDomains" })
  externalDomains?: string[];

  @SpeakeasyMetadata({ data: "json, name=maxUsers" })
  maxUsers?: number;

  @SpeakeasyMetadata({ data: "json, name=modified" })
  modified?: Date;

  @SpeakeasyMetadata({ data: "json, name=planDetails" })
  planDetails?: PlanDetails;

  @SpeakeasyMetadata({ data: "json, name=quota" })
  quota?: Quota;

  @SpeakeasyMetadata({ data: "json, name=secureOnly" })
  secureOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=showReferralLinks" })
  showReferralLinks?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=userCount" })
  userCount?: number;

  @SpeakeasyMetadata({ data: "json, name=welcomeEmailContent" })
  welcomeEmailContent?: string;

  @SpeakeasyMetadata({ data: "json, name=welcomeEmailSubject" })
  welcomeEmailSubject?: string;
}
