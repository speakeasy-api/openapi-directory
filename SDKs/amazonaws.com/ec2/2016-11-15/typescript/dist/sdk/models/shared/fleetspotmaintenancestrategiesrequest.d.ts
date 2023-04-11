import { SpeakeasyBase } from "../../../internal/utils";
import { FleetSpotCapacityRebalanceRequest } from "./fleetspotcapacityrebalancerequest";
/**
 * The strategies for managing your Spot Instances that are at an elevated risk of being interrupted.
 */
export declare class FleetSpotMaintenanceStrategiesRequest extends SpeakeasyBase {
    capacityRebalance?: FleetSpotCapacityRebalanceRequest;
}
