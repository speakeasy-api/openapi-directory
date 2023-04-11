import { SpeakeasyBase } from "../../../internal/utils";
import { LinksGetBillingPeriodsLink } from "./linksgetbillingperiodslink";
import { LinksGetContractsLink } from "./linksgetcontractslink";
import { LinksGetCustomerIndexLink } from "./linksgetcustomerindexlink";
import { LinksGetFriendInfoLink } from "./linksgetfriendinfolink";
import { LinksGetInvoicesLink } from "./linksgetinvoiceslink";
import { LinksGetOfferLink } from "./linksgetofferlink";
import { LinksGetStandardOffersLink } from "./linksgetstandardofferslink";
import { LinksGetStoresLink } from "./linksgetstoreslink";
import { LinksGetUserAccountInfoLink } from "./linksgetuseraccountinfolink";
import { LinksLogoutLink } from "./linkslogoutlink";
/**
 * Gives you want you can do on this API
 */
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
