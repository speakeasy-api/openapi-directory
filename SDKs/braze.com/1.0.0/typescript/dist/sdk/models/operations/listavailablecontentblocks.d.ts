import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListAvailableContentBlocksRequest extends SpeakeasyBase {
    /**
     * (Optional) Positive Number
     *
     * @remarks
     *
     * Maximum number of content blocks to retrieve, default to 100 if not provided, maximum acceptable value is 1000.
     */
    limit?: string;
    /**
     * (Optional) String in ISO 8601
     *
     * @remarks
     *
     * Retrieve only content blocks updated at or after the given time.
     */
    modifiedAfter?: string;
    /**
     * (Optional) String in ISO 8601
     *
     * @remarks
     *
     * Retrieve only content blocks updated at or before the given time.
     */
    modifiedBefore?: string;
    /**
     * (Optional) Positive Number
     *
     * @remarks
     *
     * Number of content blocks to skip before returning rest of the templates that fit the search criteria.
     */
    offset?: string;
}
export declare class ListAvailableContentBlocksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
