import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the scope.
 */
export declare enum CreateIpamScopeResultIpamScopeIpamScopeTypeEnum {
    Public = "public",
    Private = "private"
}
/**
 * The state of the IPAM scope.
 */
export declare enum CreateIpamScopeResultIpamScopeStateEnum {
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
export declare class CreateIpamScopeResultIpamScopeTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the created scope.
 */
export declare class CreateIpamScopeResultIpamScope extends SpeakeasyBase {
    description?: string;
    ipamArn?: string;
    ipamRegion?: string;
    ipamScopeArn?: string;
    ipamScopeId?: string;
    ipamScopeType?: CreateIpamScopeResultIpamScopeIpamScopeTypeEnum;
    isDefault?: boolean;
    ownerId?: string;
    poolCount?: number;
    state?: CreateIpamScopeResultIpamScopeStateEnum;
    tags?: CreateIpamScopeResultIpamScopeTags[];
}
/**
 * Success
 */
export declare class CreateIpamScopeResult extends SpeakeasyBase {
    ipamScope?: CreateIpamScopeResultIpamScope;
}
