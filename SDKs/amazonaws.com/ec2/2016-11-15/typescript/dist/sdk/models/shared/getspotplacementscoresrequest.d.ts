import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceRequirementsWithMetadataRequest } from "./instancerequirementswithmetadatarequest";
import { TargetCapacityUnitTypeEnum } from "./targetcapacityunittypeenum";
export declare class GetSpotPlacementScoresRequest extends SpeakeasyBase {
    dryRun?: boolean;
    instanceRequirementsWithMetadata?: InstanceRequirementsWithMetadataRequest;
    instanceTypes?: string[];
    maxResults?: number;
    nextToken?: string;
    regionNames?: string[];
    singleAvailabilityZone?: boolean;
    targetCapacity: number;
    targetCapacityUnitType?: TargetCapacityUnitTypeEnum;
}
