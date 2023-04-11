import { SpeakeasyBase } from "../../../internal/utils";
import { ArtifactOutput } from "./artifact";
/**
 * Response message for ListArtifacts.
 */
export declare class ListArtifactsResponse extends SpeakeasyBase {
    /**
     * The artifacts from the specified publisher.
     */
    artifacts?: ArtifactOutput[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
