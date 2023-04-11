import { SpeakeasyBase } from "../../../internal/utils";
import { VpcConfig } from "./vpcconfig";
/**
 * Data security configuration.
 */
export declare class DataSecurityConfig extends SpeakeasyBase {
    dataLakeKmsKeyId?: string;
    modelKmsKeyId?: string;
    volumeKmsKeyId?: string;
    /**
     *  Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>.
     */
    vpcConfig?: VpcConfig;
}
