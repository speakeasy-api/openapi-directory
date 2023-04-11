import { SpeakeasyBase } from "../../../internal/utils";
import { BatchTransformInput } from "./batchtransforminput";
import { EndpointInput } from "./endpointinput";
/**
 * The inputs for a monitoring job.
 */
export declare class MonitoringInput extends SpeakeasyBase {
    batchTransformInput?: BatchTransformInput;
    endpointInput?: EndpointInput;
}
