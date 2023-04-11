import { SpeakeasyBase } from "../../../internal/utils";
import { ElasticInferenceAcceleratorHealth } from "./elasticinferenceacceleratorhealth";
/**
 *  The details of an Elastic Inference Accelerator.
 */
export declare class ElasticInferenceAccelerator extends SpeakeasyBase {
    acceleratorHealth?: ElasticInferenceAcceleratorHealth;
    acceleratorId?: string;
    acceleratorType?: string;
    attachedResource?: string;
    availabilityZone?: string;
}
