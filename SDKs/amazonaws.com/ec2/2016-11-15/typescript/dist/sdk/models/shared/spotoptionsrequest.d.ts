import { SpeakeasyBase } from "../../../internal/utils";
import { FleetSpotMaintenanceStrategiesRequest } from "./fleetspotmaintenancestrategiesrequest";
import { SpotAllocationStrategyEnum } from "./spotallocationstrategyenum";
import { SpotInstanceInterruptionBehaviorEnum } from "./spotinstanceinterruptionbehaviorenum";
/**
 * Describes the configuration of Spot Instances in an EC2 Fleet request.
 */
export declare class SpotOptionsRequest extends SpeakeasyBase {
    allocationStrategy?: SpotAllocationStrategyEnum;
    instanceInterruptionBehavior?: SpotInstanceInterruptionBehaviorEnum;
    instancePoolsToUseCount?: number;
    maintenanceStrategies?: FleetSpotMaintenanceStrategiesRequest;
    maxTotalPrice?: string;
    minTargetCapacity?: number;
    singleAvailabilityZone?: boolean;
    singleInstanceType?: boolean;
}
