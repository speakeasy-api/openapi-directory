import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityReservationInstancePlatformEnum } from "./capacityreservationinstanceplatformenum";
import { CapacityReservationTenancyEnum } from "./capacityreservationtenancyenum";
import { EndDateTypeEnum } from "./enddatetypeenum";
import { InstanceMatchCriteriaEnum } from "./instancematchcriteriaenum";
import { TagSpecificationList } from "./tagspecificationlist";
export declare class CreateCapacityReservationRequest extends SpeakeasyBase {
    availabilityZone?: string;
    availabilityZoneId?: string;
    clientToken?: string;
    dryRun?: boolean;
    ebsOptimized?: boolean;
    endDate?: Date;
    endDateType?: EndDateTypeEnum;
    ephemeralStorage?: boolean;
    instanceCount: number;
    instanceMatchCriteria?: InstanceMatchCriteriaEnum;
    instancePlatform: CapacityReservationInstancePlatformEnum;
    instanceType: string;
    outpostArn?: string;
    placementGroupArn?: string;
    tagSpecifications?: TagSpecificationList[];
    tenancy?: CapacityReservationTenancyEnum;
}
