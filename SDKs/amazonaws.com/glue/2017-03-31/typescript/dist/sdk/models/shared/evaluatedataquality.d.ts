import { SpeakeasyBase } from "../../../internal/utils";
import { DQResultsPublishingOptions } from "./dqresultspublishingoptions";
import { DQStopJobOnFailureOptions } from "./dqstopjobonfailureoptions";
import { DQTransformOutputEnum } from "./dqtransformoutputenum";
/**
 * Specifies your data quality evaluation criteria.
 */
export declare class EvaluateDataQuality extends SpeakeasyBase {
    inputs: string[];
    name: string;
    output?: DQTransformOutputEnum;
    publishingOptions?: DQResultsPublishingOptions;
    ruleset: string;
    stopJobOnFailureOptions?: DQStopJobOnFailureOptions;
}
