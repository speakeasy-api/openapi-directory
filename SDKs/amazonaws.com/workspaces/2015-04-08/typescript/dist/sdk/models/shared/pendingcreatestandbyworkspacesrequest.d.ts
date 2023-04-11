import { SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceStateEnum } from "./workspacestateenum";
/**
 * Information about the standby WorkSpace.
 */
export declare class PendingCreateStandbyWorkspacesRequest extends SpeakeasyBase {
    directoryId?: string;
    state?: WorkspaceStateEnum;
    userName?: string;
    workspaceId?: string;
}
