import { SpeakeasyBase } from "../../../internal/utils";
import { ModuleInfo } from "./moduleinfo";
import { ResourceStatusEnum } from "./resourcestatusenum";
import { StackResourceDriftInformation } from "./stackresourcedriftinformation";
/**
 * The StackResource data type.
 */
export declare class StackResource extends SpeakeasyBase {
    description?: string;
    driftInformation?: StackResourceDriftInformation;
    logicalResourceId: string;
    moduleInfo?: ModuleInfo;
    physicalResourceId?: string;
    resourceStatus: ResourceStatusEnum;
    resourceStatusReason?: string;
    resourceType: string;
    stackId?: string;
    stackName?: string;
    timestamp: Date;
}
