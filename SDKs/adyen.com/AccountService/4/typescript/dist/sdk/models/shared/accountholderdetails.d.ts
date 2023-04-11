import { SpeakeasyBase } from "../../../internal/utils";
import { BankAccountDetail } from "./bankaccountdetail";
import { BusinessDetails } from "./businessdetails";
import { IndividualDetails } from "./individualdetails";
import { ViasAddress } from "./viasaddress";
export declare class AccountHolderDetails extends SpeakeasyBase {
    address?: ViasAddress;
    /**
     * Array of bank accounts associated with the account holder. For details about the required `bankAccountDetail` fields, see [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information).
     */
    bankAccountDetails?: BankAccountDetail[];
    businessDetails?: BusinessDetails;
    /**
     * The email address of the account holder.
     */
    email?: string;
    /**
     * The phone number of the account holder provided as a single string. It will be handled as a landline phone.
     *
     * @remarks
     * **Examples:** "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"
     */
    fullPhoneNumber?: string;
    individualDetails?: IndividualDetails;
    /**
     * Date when you last reviewed the account holder's information, in ISO-8601 YYYY-MM-DD format. For example, **2020-01-31**.
     */
    lastReviewDate?: string;
    /**
     * The Merchant Category Code of the account holder.
     *
     * @remarks
     * > If not specified in the request, this will be derived from the platform account (which is configured by Adyen).
     */
    merchantCategoryCode?: string;
    /**
     * A set of key and value pairs for general use by the account holder or merchant.
     *
     * @remarks
     * The keys do not have specific names and may be used for storing miscellaneous data as desired.
     * > The values being stored have a maximum length of eighty (80) characters and will be truncated if necessary.
     * > Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.
     */
    metadata?: Record<string, string>;
    principalBusinessAddress?: ViasAddress;
    /**
     * The URL of the website of the account holder.
     */
    webAddress?: string;
}
