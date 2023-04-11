import { SpeakeasyBase } from "../../../internal/utils";
import { LocationModel } from "./locationmodel";
/**
 * Success
 */
export declare class ListLocationsOutput extends SpeakeasyBase {
    locations?: LocationModel[];
    nextToken?: string;
}
