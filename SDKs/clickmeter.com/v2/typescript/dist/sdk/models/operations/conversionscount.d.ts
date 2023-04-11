import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Status of conversion ("deleted"/"active")
 */
export declare enum ConversionsCountStatusEnum {
    Deleted = "deleted",
    Active = "active"
}
export declare class ConversionsCountRequest extends SpeakeasyBase {
    /**
     * Exclude conversions created before this date (YYYYMMDD)
     */
    createdAfter?: string;
    /**
     * Exclude conversions created after this date (YYYYMMDD)
     */
    createdBefore?: string;
    /**
     * Status of conversion ("deleted"/"active")
     */
    status?: ConversionsCountStatusEnum;
    /**
     * Filter fields by this pattern
     */
    textSearch?: string;
}
export declare class ConversionsCountResponse extends SpeakeasyBase {
    apiCoreResponsesCountResponce?: shared.ApiCoreResponsesCountResponce;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
