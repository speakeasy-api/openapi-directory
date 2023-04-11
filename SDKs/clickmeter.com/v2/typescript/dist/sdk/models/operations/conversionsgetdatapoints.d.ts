import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Status of datapoint ("deleted"/"active"/"paused"/"spam")
 */
export declare enum ConversionsGetDatapointsStatusEnum {
    Deleted = "deleted",
    Active = "active",
    Paused = "paused",
    Spam = "spam"
}
/**
 * Type of datapoint ("tl"/"tp")
 */
export declare enum ConversionsGetDatapointsTypeEnum {
    Tp = "tp",
    Tl = "tl"
}
export declare class ConversionsGetDatapointsRequest extends SpeakeasyBase {
    /**
     * Id of the conversion
     */
    conversionId: number;
    /**
     * Exclude datapoints created before this date (YYYYMMDD)
     */
    createdAfter?: string;
    /**
     * Exclude datapoints created after this date (YYYYMMDD)
     */
    createdBefore?: string;
    /**
     * Limit results to this number
     */
    limit?: number;
    /**
     * Offset where to start from
     */
    offset?: number;
    /**
     * Status of datapoint ("deleted"/"active"/"paused"/"spam")
     */
    status?: ConversionsGetDatapointsStatusEnum;
    /**
     * Filter by this tag name
     */
    tags?: string;
    /**
     * Filter fields by this pattern
     */
    textSearch?: string;
    /**
     * Type of datapoint ("tl"/"tp")
     */
    type?: ConversionsGetDatapointsTypeEnum;
}
export declare class ConversionsGetDatapointsResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
