import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompanyInfo } from "./companyinfo";
import { BeezUpCommonInfoSummaries } from "./beezupcommoninfosummaries";
import { AccountInfoLinks } from "./accountinfolinks";
import { PersonalInfo } from "./personalinfo";
import { AccountStatusEnum } from "./accountstatusenum";



export class AccountInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyInfo" })
  companyInfo?: CompanyInfo;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: BeezUpCommonInfoSummaries;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: AccountInfoLinks;

  @SpeakeasyMetadata({ data: "json, name=personalInfo" })
  personalInfo?: PersonalInfo;

  @SpeakeasyMetadata({ data: "json, name=profilePictureUrl" })
  profilePictureUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: AccountStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId: string;
}
