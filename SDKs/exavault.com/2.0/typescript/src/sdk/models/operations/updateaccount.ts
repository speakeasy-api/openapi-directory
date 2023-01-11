import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateAccountHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class UpdateAccountUpdateAccountRequestBodyAllowedIpRanges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ipEnd" })
  ipEnd?: string;

  @SpeakeasyMetadata({ data: "json, name=ipStart" })
  ipStart?: string;
}


export class UpdateAccountUpdateAccountRequestBodyBrandingSettingsValues extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=customEmail" })
  customEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=theme" })
  theme?: string;
}


export class UpdateAccountUpdateAccountRequestBodyAccountQuotaValues extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=noticeEnabled" })
  noticeEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=noticeThreshold" })
  noticeThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=transactionsNoticeEnabled" })
  transactionsNoticeEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=transactionsNoticeThreshold" })
  transactionsNoticeThreshold?: number;
}


export class UpdateAccountUpdateAccountRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountOnboarding" })
  accountOnboarding?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowedIpRanges", elemType: UpdateAccountUpdateAccountRequestBodyAllowedIpRanges })
  allowedIpRanges?: UpdateAccountUpdateAccountRequestBodyAllowedIpRanges[];

  @SpeakeasyMetadata({ data: "json, name=brandingSettings" })
  brandingSettings?: UpdateAccountUpdateAccountRequestBodyBrandingSettingsValues;

  @SpeakeasyMetadata({ data: "json, name=complexPasswords" })
  complexPasswords?: boolean;

  @SpeakeasyMetadata({ data: "json, name=customSignature" })
  customSignature?: string;

  @SpeakeasyMetadata({ data: "json, name=emailContent" })
  emailContent?: string;

  @SpeakeasyMetadata({ data: "json, name=emailSubject" })
  emailSubject?: string;

  @SpeakeasyMetadata({ data: "json, name=externalDomain" })
  externalDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=quota" })
  quota?: UpdateAccountUpdateAccountRequestBodyAccountQuotaValues;

  @SpeakeasyMetadata({ data: "json, name=secureOnly" })
  secureOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=showReferralLinks" })
  showReferralLinks?: boolean;
}


export class UpdateAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateAccountHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateAccountUpdateAccountRequestBody;
}


export class UpdateAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accountResponse?: shared.AccountResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
