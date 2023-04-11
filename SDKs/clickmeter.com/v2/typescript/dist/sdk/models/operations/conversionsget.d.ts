import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Status of conversion ("deleted"/"active")
 */
export declare enum ConversionsGetStatusEnum {
    Deleted = "deleted",
    Active = "active"
}
export declare class ConversionsGetRequest extends SpeakeasyBase {
    /**
     * Exclude conversions created before this date (YYYYMMDD)
     */
    createdAfter?: string;
    /**
     * Exclude conversions created after this date (YYYYMMDD)
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
     * Status of conversion ("deleted"/"active")
     */
    status?: ConversionsGetStatusEnum;
    /**
     * Filter fields by this pattern
     */
    textSearch?: string;
}
export declare class ConversionsGetResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
