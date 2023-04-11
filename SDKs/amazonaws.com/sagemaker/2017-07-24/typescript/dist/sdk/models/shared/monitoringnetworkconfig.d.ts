import { SpeakeasyBase } from "../../../internal/utils";
import { VpcConfig } from "./vpcconfig";
/**
 * The networking configuration for the monitoring job.
 */
export declare class MonitoringNetworkConfig extends SpeakeasyBase {
    enableInterContainerTrafficEncryption?: boolean;
    enableNetworkIsolation?: boolean;
    /**
     * Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon Virtual Private Cloud</a>.
     */
    vpcConfig?: VpcConfig;
}
