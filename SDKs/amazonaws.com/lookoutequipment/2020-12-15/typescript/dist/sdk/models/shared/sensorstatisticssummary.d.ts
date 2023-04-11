import { SpeakeasyBase } from "../../../internal/utils";
import { CategoricalValues } from "./categoricalvalues";
import { CountPercent } from "./countpercent";
import { LargeTimestampGaps } from "./largetimestampgaps";
import { MonotonicValues } from "./monotonicvalues";
import { MultipleOperatingModes } from "./multipleoperatingmodes";
/**
 *  Summary of ingestion statistics like whether data exists, number of missing values, number of invalid values and so on related to the particular sensor.
 */
export declare class SensorStatisticsSummary extends SpeakeasyBase {
    categoricalValues?: CategoricalValues;
    componentName?: string;
    dataEndTime?: Date;
    dataExists?: boolean;
    dataStartTime?: Date;
    duplicateTimestamps?: CountPercent;
    invalidDateEntries?: CountPercent;
    invalidValues?: CountPercent;
    largeTimestampGaps?: LargeTimestampGaps;
    missingValues?: CountPercent;
    monotonicValues?: MonotonicValues;
    multipleOperatingModes?: MultipleOperatingModes;
    sensorName?: string;
}
