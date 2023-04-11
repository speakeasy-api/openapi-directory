import { SpeakeasyBase } from "../../../internal/utils";
import { DQStopJobOnFailureTimingEnum } from "./dqstopjobonfailuretimingenum";
/**
 * Options to configure how your job will stop if your data quality evaluation fails.
 */
export declare class DQStopJobOnFailureOptions extends SpeakeasyBase {
    stopJobOnFailureTiming?: DQStopJobOnFailureTimingEnum;
}
