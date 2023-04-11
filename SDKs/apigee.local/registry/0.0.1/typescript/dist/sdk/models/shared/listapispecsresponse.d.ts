import { SpeakeasyBase } from "../../../internal/utils";
import { ApiSpecOutput } from "./apispec";
/**
 * Response message for ListApiSpecs.
 */
export declare class ListApiSpecsResponse extends SpeakeasyBase {
    /**
     * The specs from the specified publisher.
     */
    apiSpecs?: ApiSpecOutput[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
