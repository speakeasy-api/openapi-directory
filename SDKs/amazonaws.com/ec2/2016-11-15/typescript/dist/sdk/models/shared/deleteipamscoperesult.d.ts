import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the scope.
 */
export declare enum DeleteIpamScopeResultIpamScopeIpamScopeTypeEnum {
    Public = "public",
    Private = "private"
}
/**
 * The state of the IPAM scope.
 */
export declare enum DeleteIpamScopeResultIpamScopeStateEnum {
    CreateInProgress = "create-in-progress",
    CreateComplete = "create-complete",
    CreateFailed = "create-failed",
    ModifyInProgress = "modify-in-progress",
    ModifyComplete = "modify-complete",
    ModifyFailed = "modify-failed",
    DeleteInProgress = "delete-in-progress",
    DeleteComplete = "delete-complete",
    DeleteFailed = "delete-failed",
    IsolateInProgress = "isolate-in-progress",
    IsolateComplete = "isolate-complete",
    RestoreInProgress = "restore-in-progress"
}
/**
 * Describes a tag.
 */
export declare class DeleteIpamScopeResultIpamScopeTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the results of the deletion.
 */
export declare class DeleteIpamScopeResultIpamScope extends SpeakeasyBase {
    description?: string;
    ipamArn?: string;
    ipamRegion?: string;
    ipamScopeArn?: string;
    ipamScopeId?: string;
    ipamScopeType?: DeleteIpamScopeResultIpamScopeIpamScopeTypeEnum;
    isDefault?: boolean;
    ownerId?: string;
    poolCount?: number;
    state?: DeleteIpamScopeResultIpamScopeStateEnum;
    tags?: DeleteIpamScopeResultIpamScopeTags[];
}
/**
 * Success
 */
export declare class DeleteIpamScopeResult extends SpeakeasyBase {
    ipamScope?: DeleteIpamScopeResultIpamScope;
}
