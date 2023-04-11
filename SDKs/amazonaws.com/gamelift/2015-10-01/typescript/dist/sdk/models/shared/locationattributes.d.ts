import { SpeakeasyBase } from "../../../internal/utils";
import { FleetActionEnum } from "./fleetactionenum";
import { LocationState } from "./locationstate";
import { LocationUpdateStatusEnum } from "./locationupdatestatusenum";
/**
 * Details about a location in a multi-location fleet.
 */
export declare class LocationAttributes extends SpeakeasyBase {
    locationState?: LocationState;
    stoppedActions?: FleetActionEnum[];
    updateStatus?: LocationUpdateStatusEnum;
}
