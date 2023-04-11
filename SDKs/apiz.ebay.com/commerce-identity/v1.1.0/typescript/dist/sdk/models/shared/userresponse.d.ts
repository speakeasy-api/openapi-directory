import { SpeakeasyBase } from "../../../internal/utils";
import { BusinessAccount } from "./businessaccount";
import { IndividualAccount } from "./individualaccount";
/**
 * The type that defines the fields for the getUser method.
 */
export declare class UserResponse extends SpeakeasyBase {
    /**
     * Indicates the user account type. This is determined when the user registers with eBay. If they register for a business account, this value will be BUSINESS. If they register for a private account, this value will be INDIVIDUAL. This designation is required by the tax laws in the following countries: EBAY_AT, EBAY_BE, EBAY_CH, EBAY_DE, EBAY_ES, EBAY_FR, EBAY_GB, EBAY_IE, EBAY_IT, EBAY_PL Valid Values: BUSINESS or INDIVIDUAL Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/commerce/identity/types/api:AccountTypeEnum'>eBay API documentation</a>
     */
    accountType?: string;
    /**
     * The type that defines the fields for the business account information.
     */
    businessAccount?: BusinessAccount;
    /**
     * The type that defines the fields for the information of an individual account.
     */
    individualAccount?: IndividualAccount;
    /**
     * The eBay site on which the account is registered. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/commerce/identity/types/bas:MarketplaceIdEnum'>eBay API documentation</a>
     */
    registrationMarketplaceId?: string;
    /**
     * Indicates the user's account status. Possible values: CONFIRMED, UNCONFIRMED, ACCOUNTONHOLD and UNDETERMINED. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/commerce/identity/types/api:UserStatusEnum'>eBay API documentation</a>
     */
    status?: string;
    /**
     * The eBay immutable user ID of the user's account and can always be used to identify the user.
     */
    userId?: string;
    /**
     * The user name, which was specific by the user when they created the account. Note: This value can be changed by the user.
     */
    username?: string;
}
