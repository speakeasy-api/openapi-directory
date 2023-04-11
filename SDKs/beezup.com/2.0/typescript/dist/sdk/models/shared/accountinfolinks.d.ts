import { SpeakeasyBase } from "../../../internal/utils";
import { LinksActivateUserAccountLink } from "./linksactivateuseraccountlink";
import { LinksChangeEmailLink } from "./linkschangeemaillink";
import { LinksChangePasswordLink } from "./linkschangepasswordlink";
import { LinksGetCreditCardInfoLink } from "./linksgetcreditcardinfolink";
import { LinksGetProfilePictureInfoLink } from "./linksgetprofilepictureinfolink";
import { LinksGetUserAccountInfoLink } from "./linksgetuseraccountinfolink";
import { LinksSaveCompanyInfoLink } from "./linkssavecompanyinfolink";
import { LinksSaveCreditCardInfoLink } from "./linkssavecreditcardinfolink";
import { LinksSavePersonalInfoLink } from "./linkssavepersonalinfolink";
import { LinksSaveProfilePictureInfoLink } from "./linkssaveprofilepictureinfolink";
/**
 * The different actions you can make on this account
 */
export declare class AccountInfoLinks extends SpeakeasyBase {
    activateUserAccount?: LinksActivateUserAccountLink;
    changeEmail: LinksChangeEmailLink;
    changePassword: LinksChangePasswordLink;
    getCreditCardInfo: LinksGetCreditCardInfoLink;
    getProfilePictureInfo: LinksGetProfilePictureInfoLink;
    saveCompanyInfo: LinksSaveCompanyInfoLink;
    saveCreditCardInfo: LinksSaveCreditCardInfoLink;
    savePersonalInfo: LinksSavePersonalInfoLink;
    saveProfilePictureInfo: LinksSaveProfilePictureInfoLink;
    self: LinksGetUserAccountInfoLink;
}
