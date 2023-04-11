import { SpeakeasyBase } from "../../../internal/utils";
import { LocationConfiguration } from "./locationconfiguration";
export declare class CreateFleetLocationsInput extends SpeakeasyBase {
    fleetId: string;
    locations: LocationConfiguration[];
}
