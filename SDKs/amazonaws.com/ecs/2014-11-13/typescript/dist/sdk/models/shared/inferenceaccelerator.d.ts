import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details on an Elastic Inference accelerator. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-inference.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
 */
export declare class InferenceAccelerator extends SpeakeasyBase {
    deviceName: string;
    deviceType: string;
}
