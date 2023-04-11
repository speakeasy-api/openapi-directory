import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This structure specifies the VPC subnets and security groups for the stream, and whether a public IP address is to be used.
 */
export declare class SelfManagedKafkaAccessConfigurationVpc extends SpeakeasyBase {
    securityGroup?: string[];
    subnets?: string[];
}
