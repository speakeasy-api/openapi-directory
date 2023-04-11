import { SpeakeasyBase } from "../../../internal/utils";
import { Api } from "./api";
/**
 * Response message for ListApis.
 */
export declare class ListApisResponse extends SpeakeasyBase {
    /**
     * The APIs from the specified publisher.
     */
    apis?: Api[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
