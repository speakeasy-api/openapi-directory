import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * Gives you want you can do on this API
**/
export declare class CustomerIndexLinks extends SpeakeasyBase {
    accountInfo: LinksGetUserAccountInfoLink;
    billingPeriods: LinksGetBillingPeriodsLink;
    contracts?: LinksGetContractsLink;
    friendInfo: LinksGetFriendInfoLink;
    getOffer?: LinksGetOfferLink;
    invoices?: LinksGetInvoicesLink;
    logout?: LinksLogoutLink;
    self: LinksGetCustomerIndexLink;
    standardOffers: LinksGetStandardOffersLink;
    stores?: LinksGetStoresLink;
}
