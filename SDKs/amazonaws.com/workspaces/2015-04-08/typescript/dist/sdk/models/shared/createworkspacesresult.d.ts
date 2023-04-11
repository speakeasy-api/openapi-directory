import { SpeakeasyBase } from "../../../internal/utils";
import { FailedCreateWorkspaceRequest } from "./failedcreateworkspacerequest";
import { Workspace } from "./workspace";
/**
 * Success
 */
export declare class CreateWorkspacesResult extends SpeakeasyBase {
    failedRequests?: FailedCreateWorkspaceRequest[];
    pendingRequests?: Workspace[];
}
