import { SpeakeasyBase } from "../../../internal/utils";
import { CompanyInfo } from "./companyinfo";
import { BeezUpCommonInfoSummaries } from "./beezupcommoninfosummaries";
import { AccountInfoLinks } from "./accountinfolinks";
import { PersonalInfo } from "./personalinfo";
import { AccountStatusEnum } from "./accountstatusenum";
export declare class AccountInfo extends SpeakeasyBase {
    companyInfo?: CompanyInfo;
    email: string;
    info?: BeezUpCommonInfoSummaries;
    links: AccountInfoLinks;
    personalInfo?: PersonalInfo;
    profilePictureUrl?: string;
    status: AccountStatusEnum;
    userId: string;
}
