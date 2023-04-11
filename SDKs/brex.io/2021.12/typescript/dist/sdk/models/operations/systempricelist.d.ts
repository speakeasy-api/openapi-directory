import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Detailed information about the error
 */
export declare class SystemPricelistDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
export declare class SystemPricelist200ApplicationJSON extends SpeakeasyBase {
    costPerUnit?: string;
    max?: string;
    metricId?: string;
    min?: string;
    sku?: string;
}
export declare class SystemPricelistResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * List of pricing rules
     */
    systemPricelist200ApplicationJSONObjects?: SystemPricelist200ApplicationJSON[];
    /**
     * Detailed information about the error
     */
    systemPricelistDefaultApplicationJSONObject?: SystemPricelistDefaultApplicationJSON;
}
