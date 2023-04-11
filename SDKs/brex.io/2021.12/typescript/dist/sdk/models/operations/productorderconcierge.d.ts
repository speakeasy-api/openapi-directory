import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProductOrderConciergeSecurity extends SpeakeasyBase {
    userKey: string;
}
/**
 * Parameters for the concierge order
 */
export declare class ProductOrderConciergeRequestBody extends SpeakeasyBase {
    /**
     * Name of the company for which a document should be ordered. (Not required if subjectId is given)
     */
    companyName?: string;
    /**
     * Contact E-Mail, will be contacted if concierge costs are exceeding the threshhold configured on your plan
     */
    contactEmail?: string;
    /**
     * Contact phone, will be contacted if concierge costs are exceeding the threshhold configured on your plan
     */
    contactPhone?: string;
    /**
     * If the concierge cost should require additional confirmation if a threshold is reached (configured on your plan)
     */
    costConfirmation?: boolean;
    /**
     * Two letter ISO code of the country of the company
     */
    country?: string;
    /**
     * If you want financial data of the company to be retrieved
     */
    financialData?: boolean;
    /**
     * If you want historical data of the company to be retrieved
     */
    historicInformation?: boolean;
    /**
     * Requirements on what document or information should be provided. Please be very precise
     */
    informationRequirements?: string;
    /**
     * If the companies residency should be investigated
     */
    locationInvestigation?: boolean;
    /**
     * Priority of order: standard/express are allowed
     */
    priority?: string;
    /**
     * If you want register data of the company to be retrieved
     */
    registerData?: boolean;
    /**
     * Registration number of the company for which a document should be ordered. (Not required if subjectId is given)
     */
    registerNumber?: string;
    /**
     * Kompanyid of the company you want to place the order for
     */
    subjectId?: string;
}
/**
 * Detailed information about the error
 */
export declare class ProductOrderConciergeDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
/**
 * Product order details
 */
export declare class ProductOrderConcierge200ApplicationJSON extends SpeakeasyBase {
    identity: string;
    option: string;
    ordered: Date;
    owner: string;
    price: number;
    sku: string;
    status: string;
    subjectId: string;
    subjectValue: string;
}
export declare class ProductOrderConciergeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Product order details
     */
    productOrderConcierge200ApplicationJSONObject?: ProductOrderConcierge200ApplicationJSON;
    /**
     * Detailed information about the error
     */
    productOrderConciergeDefaultApplicationJSONObject?: ProductOrderConciergeDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
