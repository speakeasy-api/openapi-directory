import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the unit of aggregation in the returned results.
 */
export declare enum GetStatsUnitEnum {
    Minute = "minute",
    Hour = "hour",
    Day = "day",
    Month = "month"
}
export declare class GetStatsRequest extends SpeakeasyBase {
    /**
     * The version of the API you wish to use.
     */
    xAblyVersion?: string;
    direction?: shared.FilterDirectionEnum;
    end?: string;
    /**
     * The response format you would like
     */
    format?: shared.ResponseFormatEnum;
    limit?: number;
    start?: string;
    /**
     * Specifies the unit of aggregation in the returned results.
     */
    unit?: GetStatsUnitEnum;
}
export declare class GetStatsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getStats2XXApplicationJSONObject?: Record<string, any>;
}
