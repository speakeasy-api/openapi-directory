import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProductAvailabilitySecurity extends SpeakeasyBase {
    userKey: string;
}
export declare class ProductAvailabilityRequest extends SpeakeasyBase {
    /**
     * SKU - 9 character value from a Product object
     */
    sku: string;
    /**
     * Subject (e.g. Company) ID - 32 character hex value
     */
    subjectId: string;
}
/**
 * Detailed information about the error
 */
export declare class ProductAvailabilityDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
/**
 * Product details
 */
export declare class ProductAvailability200ApplicationJSON extends SpeakeasyBase {
    availability: string;
    category: string;
    countryCode: string;
    description: string;
    hasOptions: boolean;
    options: string[];
    price: number;
    provider: string;
    sku: string;
    type: string;
}
export declare class ProductAvailabilityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Product details
     */
    productAvailability200ApplicationJSONObject?: ProductAvailability200ApplicationJSON;
    /**
     * Detailed information about the error
     */
    productAvailabilityDefaultApplicationJSONObject?: ProductAvailabilityDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
