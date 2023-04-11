import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Entity that comprises aggregated information on sensors having insufficient data.
 */
export declare class InvalidSensorData extends SpeakeasyBase {
    affectedSensorCount: number;
    totalNumberOfInvalidValues: number;
}
