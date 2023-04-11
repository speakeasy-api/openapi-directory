import { SpeakeasyBase } from "../../../internal/utils";
import { BatchTransformInput } from "./batchtransforminput";
import { EndpointInput } from "./endpointinput";
import { MonitoringGroundTruthS3Input } from "./monitoringgroundtruths3input";
/**
 * The input for the model quality monitoring job. Currently endponts are supported for input for model quality monitoring jobs.
 */
export declare class ModelQualityJobInput extends SpeakeasyBase {
    batchTransformInput?: BatchTransformInput;
    /**
     * Input object for the endpoint
     */
    endpointInput?: EndpointInput;
    groundTruthS3Input: MonitoringGroundTruthS3Input;
}
