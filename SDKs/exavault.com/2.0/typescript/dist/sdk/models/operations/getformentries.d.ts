import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFormEntriesRequest extends SpeakeasyBase {
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API Key required to make the API call.
     */
    evApiKey: string;
    /**
     * ID of the form to retrieve entries for.
     */
    id: number;
    /**
     * Limit of records to be returned (for pagination)
     */
    limit?: number;
    /**
     * Current offset of records (for pagination)
     */
    offset?: number;
}
export declare class GetFormEntriesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    formEntryResponse?: shared.FormEntryResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
