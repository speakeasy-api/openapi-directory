import { SpeakeasyBase } from "../../../internal/utils";
import { MissingCompleteSensorData } from "./missingcompletesensordata";
import { SensorsWithShortDateRange } from "./sensorswithshortdaterange";
/**
 *  Entity that comprises aggregated information on sensors having insufficient data.
 */
export declare class InsufficientSensorData extends SpeakeasyBase {
    missingCompleteSensorData: MissingCompleteSensorData;
    sensorsWithShortDateRange: SensorsWithShortDateRange;
}
