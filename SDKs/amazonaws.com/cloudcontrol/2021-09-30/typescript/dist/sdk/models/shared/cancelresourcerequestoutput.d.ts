import { SpeakeasyBase } from "../../../internal/utils";
import { ProgressEvent } from "./progressevent";
/**
 * Success
 */
export declare class CancelResourceRequestOutput extends SpeakeasyBase {
    /**
     * Represents the current status of a resource operation request. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html">Managing resource operation requests</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.
     */
    progressEvent?: ProgressEvent;
}
