import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerDefinition } from "./containerdefinition";
import { InferenceExecutionConfig } from "./inferenceexecutionconfig";
import { Tag } from "./tag";
import { VpcConfig } from "./vpcconfig";
/**
 * The properties of a model as returned by the <a>Search</a> API.
 */
export declare class Model extends SpeakeasyBase {
    containers?: ContainerDefinition[];
    creationTime?: Date;
    enableNetworkIsolation?: boolean;
    executionRoleArn?: string;
    /**
     * Specifies details about how containers in a multi-container endpoint are run.
     */
    inferenceExecutionConfig?: InferenceExecutionConfig;
    modelArn?: string;
    modelName?: string;
    /**
     * Describes the container, as part of model definition.
     */
    primaryContainer?: ContainerDefinition;
    tags?: Tag[];
    /**
     * Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon Virtual Private Cloud</a>.
     */
    vpcConfig?: VpcConfig;
}
