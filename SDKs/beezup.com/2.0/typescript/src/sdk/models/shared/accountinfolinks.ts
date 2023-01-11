import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksActivateUserAccountLink } from "./linksactivateuseraccountlink";
import { LinksChangeEmailLink } from "./linkschangeemaillink";
import { LinksChangePasswordLink } from "./linkschangepasswordlink";
import { LinksGetCreditCardInfoLink } from "./linksgetcreditcardinfolink";
import { LinksGetProfilePictureInfoLink } from "./linksgetprofilepictureinfolink";
import { LinksSaveCompanyInfoLink } from "./linkssavecompanyinfolink";
import { LinksSaveCreditCardInfoLink } from "./linkssavecreditcardinfolink";
import { LinksSavePersonalInfoLink } from "./linkssavepersonalinfolink";
import { LinksSaveProfilePictureInfoLink } from "./linkssaveprofilepictureinfolink";
import { LinksGetUserAccountInfoLink } from "./linksgetuseraccountinfolink";



// AccountInfoLinks
/** 
 * The different actions you can make on this account
**/
export class AccountInfoLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activateUserAccount" })
  activateUserAccount?: LinksActivateUserAccountLink;

  @SpeakeasyMetadata({ data: "json, name=changeEmail" })
  changeEmail: LinksChangeEmailLink;

  @SpeakeasyMetadata({ data: "json, name=changePassword" })
  changePassword: LinksChangePasswordLink;

  @SpeakeasyMetadata({ data: "json, name=getCreditCardInfo" })
  getCreditCardInfo: LinksGetCreditCardInfoLink;

  @SpeakeasyMetadata({ data: "json, name=getProfilePictureInfo" })
  getProfilePictureInfo: LinksGetProfilePictureInfoLink;

  @SpeakeasyMetadata({ data: "json, name=saveCompanyInfo" })
  saveCompanyInfo: LinksSaveCompanyInfoLink;

  @SpeakeasyMetadata({ data: "json, name=saveCreditCardInfo" })
  saveCreditCardInfo: LinksSaveCreditCardInfoLink;

  @SpeakeasyMetadata({ data: "json, name=savePersonalInfo" })
  savePersonalInfo: LinksSavePersonalInfoLink;

  @SpeakeasyMetadata({ data: "json, name=saveProfilePictureInfo" })
  saveProfilePictureInfo: LinksSaveProfilePictureInfoLink;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksGetUserAccountInfoLink;
}
