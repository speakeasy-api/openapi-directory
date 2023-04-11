import { SpeakeasyBase } from "../../../internal/utils";
import { ApiDeployment } from "./apideployment";
/**
 * Response message for ListApiDeploymentRevisionsResponse.
 */
export declare class ListApiDeploymentRevisionsResponse extends SpeakeasyBase {
    /**
     * The revisions of the deployment.
     */
    apiDeployments?: ApiDeployment[];
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
