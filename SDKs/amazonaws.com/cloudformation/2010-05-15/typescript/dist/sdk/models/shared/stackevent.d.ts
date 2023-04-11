import { SpeakeasyBase } from "../../../internal/utils";
import { HookFailureModeEnum } from "./hookfailuremodeenum";
import { HookInvocationPointEnum } from "./hookinvocationpointenum";
import { HookStatusEnum } from "./hookstatusenum";
import { ResourceStatusEnum } from "./resourcestatusenum";
/**
 * The StackEvent data type.
 */
export declare class StackEvent extends SpeakeasyBase {
    clientRequestToken?: string;
    eventId: string;
    hookFailureMode?: HookFailureModeEnum;
    hookInvocationPoint?: HookInvocationPointEnum;
    hookStatus?: HookStatusEnum;
    hookStatusReason?: string;
    hookType?: string;
    logicalResourceId?: string;
    physicalResourceId?: string;
    resourceProperties?: string;
    resourceStatus?: ResourceStatusEnum;
    resourceStatusReason?: string;
    resourceType?: string;
    stackId: string;
    stackName: string;
    timestamp: Date;
}
