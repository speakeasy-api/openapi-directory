import { SpeakeasyBase } from "../../../internal/utils";
import { StoreLocation } from "./storelocation";
import { StoreSplitConfiguration } from "./storesplitconfiguration";
export declare class StoreCreationWithMerchantCodeRequest extends SpeakeasyBase {
    address: StoreLocation;
    /**
     * The unique identifiers of the [business lines](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/businesslines__resParam_id) that the store is associated with.
     *
     * @remarks
     * If not specified, the business line of the merchant account is used. Required when there are multiple business lines under the merchant account.
     */
    businessLineIds?: string[];
    /**
     * Your description of the store.
     */
    description: string;
    /**
     * When using the Zip payment method: The location ID that Zip has assigned to your store.
     */
    externalReferenceId?: string;
    /**
     * The unique identifier of the merchant account that the store belongs to.
     */
    merchantId: string;
    /**
     * The phone number of the store, including '+' and country code.
     */
    phoneNumber: string;
    /**
     * Your reference to recognize the store by. Also known as the store code.
     *
     * @remarks
     *  Allowed characters: Lowercase and uppercase letters without diacritics, numbers 0 through 9, hyphen (-), and underscore (_).
     */
    reference?: string;
    /**
     * The store name to be shown on the shopper's bank or credit card statement and on the shopper receipt.
     *
     * @remarks
     * Maximum length: 22 characters; can't be all numbers.
     */
    shopperStatement: string;
    splitConfiguration?: StoreSplitConfiguration;
}
