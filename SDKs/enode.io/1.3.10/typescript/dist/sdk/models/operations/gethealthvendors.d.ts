import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetHealthVendors200ApplicationJsonStatusEnum {
    Ready = "READY",
    ElevatedErrorRate = "ELEVATED_ERROR_RATE",
    Outage = "OUTAGE"
}
/**
 * Vendor status and metadata
**/
export declare class GetHealthVendors200ApplicationJson extends SpeakeasyBase {
    displayName?: string;
    status?: GetHealthVendors200ApplicationJsonStatusEnum;
    vendor?: shared.Oneme1vendors1Percent7BvendorPercent7DDeleteParameters0SchemaEnum;
}
export declare class GetHealthVendorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getHealthVendors200ApplicationJSONObjects?: GetHealthVendors200ApplicationJson[];
}
