import { SpeakeasyBase } from "../../../internal/utils";
import { ApiDeployment } from "./apideployment";
/**
 * Response message for ListApiDeployments.
 */
export declare class ListApiDeploymentsResponse extends SpeakeasyBase {
    /**
     * The deployments from the specified publisher.
     */
    apiDeployments?: ApiDeployment[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
