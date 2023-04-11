import { SpeakeasyBase } from "../../../internal/utils";
import { BatchTransformInput } from "./batchtransforminput";
import { EndpointInput } from "./endpointinput";
/**
 * The input for the data quality monitoring job. Currently endpoints are supported for input.
 */
export declare class DataQualityJobInput extends SpeakeasyBase {
    batchTransformInput?: BatchTransformInput;
    /**
     * Input object for the endpoint
     */
    endpointInput?: EndpointInput;
}
