import { SpeakeasyBase } from "../../../internal/utils";
import { BandMathConfigInput } from "./bandmathconfiginput";
import { CloudRemovalConfigInput } from "./cloudremovalconfiginput";
import { GeoMosaicConfigInput } from "./geomosaicconfiginput";
import { ResamplingConfigInput } from "./resamplingconfiginput";
import { StackConfigInput } from "./stackconfiginput";
import { TemporalStatisticsConfigInput } from "./temporalstatisticsconfiginput";
import { ZonalStatisticsConfigInput } from "./zonalstatisticsconfiginput";
/**
 * The input structure for the JobConfig in an EarthObservationJob.
 */
export declare class JobConfigInput extends SpeakeasyBase {
    bandMathConfig?: BandMathConfigInput;
    cloudMaskingConfig?: Record<string, any>;
    cloudRemovalConfig?: CloudRemovalConfigInput;
    geoMosaicConfig?: GeoMosaicConfigInput;
    landCoverSegmentationConfig?: Record<string, any>;
    resamplingConfig?: ResamplingConfigInput;
    stackConfig?: StackConfigInput;
    temporalStatisticsConfig?: TemporalStatisticsConfigInput;
    zonalStatisticsConfig?: ZonalStatisticsConfigInput;
}
