import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityReservationOptionsRequest } from "./capacityreservationoptionsrequest";
import { FleetOnDemandAllocationStrategyEnum } from "./fleetondemandallocationstrategyenum";
/**
 * Describes the configuration of On-Demand Instances in an EC2 Fleet.
 */
export declare class OnDemandOptionsRequest extends SpeakeasyBase {
    allocationStrategy?: FleetOnDemandAllocationStrategyEnum;
    capacityReservationOptions?: CapacityReservationOptionsRequest;
    maxTotalPrice?: string;
    minTargetCapacity?: number;
    singleAvailabilityZone?: boolean;
    singleInstanceType?: boolean;
}
