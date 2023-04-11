import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionMapping } from "./dimensionmapping";
import { MixedMeasureMapping } from "./mixedmeasuremapping";
import { MultiMeasureMappings } from "./multimeasuremappings";
import { TimeUnitEnum } from "./timeunitenum";
/**
 * Data model for a batch load task.
 */
export declare class DataModel extends SpeakeasyBase {
    dimensionMappings: DimensionMapping[];
    measureNameColumn?: string;
    mixedMeasureMappings?: MixedMeasureMapping[];
    multiMeasureMappings?: MultiMeasureMappings;
    timeColumn?: string;
    timeUnit?: TimeUnitEnum;
}
