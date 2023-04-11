import { SpeakeasyBase } from "../../../internal/utils";
import { StandbyWorkspace } from "./standbyworkspace";
/**
 * Describes the standby WorkSpace that could not be created.
 */
export declare class FailedCreateStandbyWorkspacesRequest extends SpeakeasyBase {
    errorCode?: string;
    errorMessage?: string;
    standbyWorkspaceRequest?: StandbyWorkspace;
}
