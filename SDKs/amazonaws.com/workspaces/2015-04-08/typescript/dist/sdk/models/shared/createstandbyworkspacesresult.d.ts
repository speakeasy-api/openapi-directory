import { SpeakeasyBase } from "../../../internal/utils";
import { FailedCreateStandbyWorkspacesRequest } from "./failedcreatestandbyworkspacesrequest";
import { PendingCreateStandbyWorkspacesRequest } from "./pendingcreatestandbyworkspacesrequest";
/**
 * Success
 */
export declare class CreateStandbyWorkspacesResult extends SpeakeasyBase {
    failedStandbyRequests?: FailedCreateStandbyWorkspacesRequest[];
    pendingStandbyRequests?: PendingCreateStandbyWorkspacesRequest[];
}
