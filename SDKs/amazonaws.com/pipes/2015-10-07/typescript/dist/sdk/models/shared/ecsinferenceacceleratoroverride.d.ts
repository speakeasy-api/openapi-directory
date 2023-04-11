import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details on an Elastic Inference accelerator task override. This parameter is used to override the Elastic Inference accelerator specified in the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/userguide/ecs-inference.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
 */
export declare class EcsInferenceAcceleratorOverride extends SpeakeasyBase {
    deviceName?: string;
    deviceType?: string;
}
