import { SpeakeasyBase } from "../../../internal/utils";
import { FleetAttributes } from "./fleetattributes";
import { LocationState } from "./locationstate";
/**
 * Success
 */
export declare class CreateFleetOutput extends SpeakeasyBase {
    fleetAttributes?: FleetAttributes;
    locationStates?: LocationState[];
}
