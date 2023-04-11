import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListResourcesRequest extends SpeakeasyBase {
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API Key required to make the API call.
     */
    evApiKey: string;
    /**
     * Comma separated list of relationships to include in response. Possible values are **share**, **notifications**, **directFile**, **parentResource**, **ownerUser**, **ownerAccount**.
     */
    include?: string;
    /**
     * The number of files to limit the result. If you have more files in your directory than this limit, make multiple calls, incrementing the `offset` parameter, above.
     */
    limit?: number;
    /**
     * Text to match resource names. This allows you to filter the results returned. For example, to locate only zip archive files, you can enter `*zip` and only resources ending in "zip" will be included in the list of results.
     */
    name?: string;
    /**
     * Determines which item to start on for pagination. Use zero (0) to start at the beginning of the list. e.g, setting `offset=200` would trigger the server to skip the first 200 matching entries when returning the results.
     */
    offset?: number;
    /**
     * Resource identifier to get resources for. Can be path/id/name.
     */
    resource: string;
    /**
     * Endpoint support multiple sort fields by allowing array of sort params. Sort fields should be applied in the order specified. The sort order for each sort field is ascending unless it is prefixed with a minus (“-“), in which case it will be descending.
     */
    sort?: string;
    /**
     * Limit types of resources returned to "file" or "dir" only. This is ignored if you are using the `name` parameter to trigger a search.
     */
    type?: string;
}
export declare class ListResourcesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Operation
     */
    resourceCollectionResponse?: shared.ResourceCollectionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
