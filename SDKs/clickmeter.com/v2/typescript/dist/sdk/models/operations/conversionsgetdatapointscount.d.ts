import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConversionsGetDatapointsCountRequest extends SpeakeasyBase {
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
     * Status of datapoint ("deleted"/"active"/"paused"/"spam")
     */
    status?: string;
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
    type?: string;
}
export declare class ConversionsGetDatapointsCountResponse extends SpeakeasyBase {
    apiCoreResponsesCountResponce?: shared.ApiCoreResponsesCountResponce;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
