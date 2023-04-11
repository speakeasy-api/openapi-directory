import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Type of entity related to the tag
 */
export declare enum TagsGetTypeEnum {
    Tp = "tp",
    Tl = "tl",
    Dp = "dp",
    Gr = "gr"
}
export declare class TagsGetRequest extends SpeakeasyBase {
    /**
     * Comma separated list of datapoints id to filter by
     */
    datapoints?: string;
    /**
     * Comma separated list of groups id to filter by
     */
    groups?: string;
    /**
     * Maximum elements to retrieve. Default to 20 if not specified.
     */
    limit?: number;
    /**
     * Name of the tag
     */
    name?: string;
    /**
     * Where to start when retrieving elements. Default is 0 if not specified.
     */
    offset?: number;
    /**
     * Type of entity related to the tag
     */
    type?: TagsGetTypeEnum;
}
export declare class TagsGetResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
