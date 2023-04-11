import { SpeakeasyBase } from "../../../internal/utils";
import { LocationState } from "./locationstate";
/**
 * Success
 */
export declare class DeleteFleetLocationsOutput extends SpeakeasyBase {
    fleetArn?: string;
    fleetId?: string;
    locationStates?: LocationState[];
}
