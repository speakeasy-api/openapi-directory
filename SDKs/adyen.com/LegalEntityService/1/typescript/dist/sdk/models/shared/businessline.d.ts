import { SpeakeasyBase } from "../../../internal/utils";
import { SourceOfFunds } from "./sourceoffunds";
import { WebData } from "./webdata";
import { WebDataExemption } from "./webdataexemption";
/**
 * OK - the request has succeeded.
 */
export declare class BusinessLine extends SpeakeasyBase {
    /**
     * The capability for which you are creating the business line. For example, **receivePayments**.
     */
    capability: string;
    /**
     * The unique identifier of the business line.
     */
    id: string;
    /**
     * A code that represents the industry of the legal entity. For example, **4431A** for computer software stores.
     */
    industryCode: string;
    /**
     * Unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id) that owns the business line.
     */
    legalEntityId: string;
    /**
     * A list of channels where goods or services are sold.
     *
     * @remarks
     *
     * Possible values: **pos**, **posMoto**, **eCommerce**, **ecomMoto**, **payByLink**.
     *
     * Required only in combination with the `capability` to **receivePayments** or **receiveFromPlatformPayments**.
     */
    salesChannels?: string[];
    sourceOfFunds?: SourceOfFunds;
    /**
     * List of website URLs where your user's goods or services are sold. When this is required for a capability but your user does not have an online presence, provide the reason in the `webDataExemption` object.
     */
    webData?: WebData[];
    webDataExemption?: WebDataExemption;
}
