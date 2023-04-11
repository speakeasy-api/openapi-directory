import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListResourceContentsRequest extends SpeakeasyBase {
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API Key required to make the API call.
     */
    evApiKey: string;
    /**
     * ID of the parent resource to get a list of resources for.
     */
    id: number;
    /**
     * Comma separated list of relationships to include in response. Possible values are **share**, **notifications**, **directFile**, **parentResource**, **ownerUser**, **ownerUser**.
     */
    include?: string;
    /**
     * The number of files to limit the result. Cannot be set higher than 100. If you have more than one hundred files in your directory, make multiple calls, incrementing the `offset parameter, above.
     */
    limit?: number;
    /**
     * Determines which item to start on for pagination. Use zero (0) to start at the beginning of the list.
     */
    offset?: number;
    /**
     * Endpoint support multiple sort fields by allowing array of sort params. Sort fields should be applied in the order specified. The sort order for each sort field is ascending unless it is prefixed with a minus (“-“), in which case it will be descending.
     */
    sort?: string;
    /**
     * Limit types of resources returned to "file" or "dir" only.
     */
    type?: string;
}
export declare class ListResourceContentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Operation
     */
    resourceCollectionResponse?: shared.ResourceCollectionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
