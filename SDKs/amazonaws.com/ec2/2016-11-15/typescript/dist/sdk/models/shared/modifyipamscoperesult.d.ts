import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the scope.
 */
export declare enum ModifyIpamScopeResultIpamScopeIpamScopeTypeEnum {
    Public = "public",
    Private = "private"
}
/**
 * The state of the IPAM scope.
 */
export declare enum ModifyIpamScopeResultIpamScopeStateEnum {
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
export declare class ModifyIpamScopeResultIpamScopeTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The results of the modification.
 */
export declare class ModifyIpamScopeResultIpamScope extends SpeakeasyBase {
    description?: string;
    ipamArn?: string;
    ipamRegion?: string;
    ipamScopeArn?: string;
    ipamScopeId?: string;
    ipamScopeType?: ModifyIpamScopeResultIpamScopeIpamScopeTypeEnum;
    isDefault?: boolean;
    ownerId?: string;
    poolCount?: number;
    state?: ModifyIpamScopeResultIpamScopeStateEnum;
    tags?: ModifyIpamScopeResultIpamScopeTags[];
}
/**
 * Success
 */
export declare class ModifyIpamScopeResult extends SpeakeasyBase {
    ipamScope?: ModifyIpamScopeResultIpamScope;
}
