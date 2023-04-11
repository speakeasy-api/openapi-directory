import { SpeakeasyBase } from "../../../internal/utils";
import { PipelineTypeEnum } from "./pipelinetypeenum";
/**
 * Detailed information of the pipeline.
 */
export declare class PipelineInfo extends SpeakeasyBase {
    pipelineConfigurationTimeStamp?: string;
    pipelineType?: PipelineTypeEnum;
}
