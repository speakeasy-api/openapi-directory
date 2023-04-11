import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A list of container definitions that describe the different containers that make up an AutoML candidate. For more information, see <code> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ContainerDefinition.html"> ContainerDefinition</a> </code>.
 */
export declare class AutoMLContainerDefinition extends SpeakeasyBase {
    environment?: Record<string, string>;
    image: string;
    modelDataUrl: string;
}
