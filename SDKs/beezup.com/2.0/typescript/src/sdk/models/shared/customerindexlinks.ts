import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksGetUserAccountInfoLink } from "./linksgetuseraccountinfolink";
import { LinksGetBillingPeriodsLink } from "./linksgetbillingperiodslink";
import { LinksGetContractsLink } from "./linksgetcontractslink";
import { LinksGetFriendInfoLink } from "./linksgetfriendinfolink";
import { LinksGetOfferLink } from "./linksgetofferlink";
import { LinksGetInvoicesLink } from "./linksgetinvoiceslink";
import { LinksLogoutLink } from "./linkslogoutlink";
import { LinksGetCustomerIndexLink } from "./linksgetcustomerindexlink";
import { LinksGetStandardOffersLink } from "./linksgetstandardofferslink";
import { LinksGetStoresLink } from "./linksgetstoreslink";



// CustomerIndexLinks
/** 
 * Gives you want you can do on this API
**/
export class CustomerIndexLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountInfo" })
  accountInfo: LinksGetUserAccountInfoLink;

  @SpeakeasyMetadata({ data: "json, name=billingPeriods" })
  billingPeriods: LinksGetBillingPeriodsLink;

  @SpeakeasyMetadata({ data: "json, name=contracts" })
  contracts?: LinksGetContractsLink;

  @SpeakeasyMetadata({ data: "json, name=friendInfo" })
  friendInfo: LinksGetFriendInfoLink;

  @SpeakeasyMetadata({ data: "json, name=getOffer" })
  getOffer?: LinksGetOfferLink;

  @SpeakeasyMetadata({ data: "json, name=invoices" })
  invoices?: LinksGetInvoicesLink;

  @SpeakeasyMetadata({ data: "json, name=logout" })
  logout?: LinksLogoutLink;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksGetCustomerIndexLink;

  @SpeakeasyMetadata({ data: "json, name=standardOffers" })
  standardOffers: LinksGetStandardOffersLink;

  @SpeakeasyMetadata({ data: "json, name=stores" })
  stores?: LinksGetStoresLink;
}
