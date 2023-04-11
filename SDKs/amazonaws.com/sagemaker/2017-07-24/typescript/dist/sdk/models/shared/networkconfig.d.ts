import { SpeakeasyBase } from "../../../internal/utils";
import { VpcConfig } from "./vpcconfig";
/**
 * Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.
 */
export declare class NetworkConfig extends SpeakeasyBase {
    enableInterContainerTrafficEncryption?: boolean;
    enableNetworkIsolation?: boolean;
    /**
     * Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon Virtual Private Cloud</a>.
     */
    vpcConfig?: VpcConfig;
}
