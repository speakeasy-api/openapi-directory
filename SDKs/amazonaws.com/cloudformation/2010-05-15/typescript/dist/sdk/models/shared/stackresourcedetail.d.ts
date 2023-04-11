import { SpeakeasyBase } from "../../../internal/utils";
import { ModuleInfo } from "./moduleinfo";
import { ResourceStatusEnum } from "./resourcestatusenum";
import { StackResourceDriftInformation } from "./stackresourcedriftinformation";
/**
 * Contains detailed information about the specified stack resource.
 */
export declare class StackResourceDetail extends SpeakeasyBase {
    description?: string;
    driftInformation?: StackResourceDriftInformation;
    lastUpdatedTimestamp: Date;
    logicalResourceId: string;
    metadata?: string;
    moduleInfo?: ModuleInfo;
    physicalResourceId?: string;
    resourceStatus: ResourceStatusEnum;
    resourceStatusReason?: string;
    resourceType: string;
    stackId?: string;
    stackName?: string;
}
