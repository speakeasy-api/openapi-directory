import { SpeakeasyBase } from "../../../internal/utils";
import { RequestCountAllocation } from "./requestcountallocation";
export declare class ConsumerRequestCountsInDateRangeResponseData extends SpeakeasyBase {
    aggregatedRequestCount?: number;
    applicationId?: string;
    consumerId?: string;
    endDatetime?: string;
    requestCounts?: RequestCountAllocation;
    startDatetime?: string;
}
/**
 * Consumers Request Counts within Date Range
 */
export declare class ConsumerRequestCountsInDateRangeResponse extends SpeakeasyBase {
    data: ConsumerRequestCountsInDateRangeResponseData;
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}
