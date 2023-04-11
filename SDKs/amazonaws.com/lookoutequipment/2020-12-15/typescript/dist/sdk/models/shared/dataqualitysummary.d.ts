import { SpeakeasyBase } from "../../../internal/utils";
import { DuplicateTimestamps } from "./duplicatetimestamps";
import { InsufficientSensorData } from "./insufficientsensordata";
import { InvalidSensorData } from "./invalidsensordata";
import { MissingSensorData } from "./missingsensordata";
import { UnsupportedTimestamps } from "./unsupportedtimestamps";
/**
 *  DataQualitySummary gives aggregated statistics over all the sensors about a completed ingestion job. It primarily gives more information about statistics over different incorrect data like MissingCompleteSensorData, MissingSensorData, UnsupportedDateFormats, InsufficientSensorData, DuplicateTimeStamps.
 */
export declare class DataQualitySummary extends SpeakeasyBase {
    duplicateTimestamps: DuplicateTimestamps;
    insufficientSensorData: InsufficientSensorData;
    invalidSensorData: InvalidSensorData;
    missingSensorData: MissingSensorData;
    unsupportedTimestamps: UnsupportedTimestamps;
}
