import { SpeakeasyBase } from "../../../internal/utils";
import { ModificationState } from "./modificationstate";
import { RelatedWorkspaceProperties } from "./relatedworkspaceproperties";
import { WorkspaceProperties } from "./workspaceproperties";
import { WorkspaceStateEnum } from "./workspacestateenum";
/**
 * Describes a WorkSpace.
 */
export declare class Workspace extends SpeakeasyBase {
    bundleId?: string;
    computerName?: string;
    directoryId?: string;
    errorCode?: string;
    errorMessage?: string;
    ipAddress?: string;
    modificationStates?: ModificationState[];
    relatedWorkspaces?: RelatedWorkspaceProperties[];
    rootVolumeEncryptionEnabled?: boolean;
    state?: WorkspaceStateEnum;
    subnetId?: string;
    userName?: string;
    userVolumeEncryptionEnabled?: boolean;
    volumeEncryptionKey?: string;
    workspaceId?: string;
    workspaceProperties?: WorkspaceProperties;
}
