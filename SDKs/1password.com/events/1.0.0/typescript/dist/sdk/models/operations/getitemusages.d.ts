import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetItemUsagesSecurity extends SpeakeasyBase {
    jwtsa: string;
}
/**
 * Item usages response object
 */
export declare class GetItemUsages200ApplicationJSON extends SpeakeasyBase {
    items?: shared.ItemUsage[];
}
export declare class GetItemUsagesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Item usages response object
     */
    getItemUsages200ApplicationJSONObject?: GetItemUsages200ApplicationJSON;
}
