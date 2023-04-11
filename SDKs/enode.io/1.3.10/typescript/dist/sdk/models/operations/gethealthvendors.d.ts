import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Ready-state of the Vendor
 */
export declare enum GetHealthVendors200ApplicationJSONStatusEnum {
    Ready = "READY",
    ElevatedErrorRate = "ELEVATED_ERROR_RATE",
    Outage = "OUTAGE"
}
/**
 * Vendor status and metadata
 */
export declare class GetHealthVendors200ApplicationJSON extends SpeakeasyBase {
    /**
     * Displayable name of the Vendor
     */
    displayName?: string;
    /**
     * Ready-state of the Vendor
     */
    status?: GetHealthVendors200ApplicationJSONStatusEnum;
    /**
     * Vendor ID
     */
    vendor?: shared.Oneme1vendors1Percent7BvendorPercent7DDeleteParameters0SchemaEnum;
}
export declare class GetHealthVendorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful
     */
    getHealthVendors200ApplicationJSONObjects?: GetHealthVendors200ApplicationJSON[];
}
