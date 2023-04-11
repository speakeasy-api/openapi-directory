import { SpeakeasyBase } from "../../../internal/utils";
import { ModuleInfo } from "./moduleinfo";
import { ResourceStatusEnum } from "./resourcestatusenum";
import { StackResourceDriftInformationSummary } from "./stackresourcedriftinformationsummary";
/**
 * Contains high-level information about the specified stack resource.
 */
export declare class StackResourceSummary extends SpeakeasyBase {
    driftInformation?: StackResourceDriftInformationSummary;
    lastUpdatedTimestamp: Date;
    logicalResourceId: string;
    moduleInfo?: ModuleInfo;
    physicalResourceId?: string;
    resourceStatus: ResourceStatusEnum;
    resourceStatusReason?: string;
    resourceType: string;
}
