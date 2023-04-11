import { SpeakeasyBase } from "../../../internal/utils";
import { ChangeSetHookTargetDetails } from "./changesethooktargetdetails";
import { HookFailureModeEnum } from "./hookfailuremodeenum";
import { HookInvocationPointEnum } from "./hookinvocationpointenum";
/**
 * Specifies the resource, the hook, and the hook version to be invoked.
 */
export declare class ChangeSetHook extends SpeakeasyBase {
    failureMode?: HookFailureModeEnum;
    invocationPoint?: HookInvocationPointEnum;
    targetDetails?: ChangeSetHookTargetDetails;
    typeConfigurationVersionId?: string;
    typeName?: string;
    typeVersionId?: string;
}
