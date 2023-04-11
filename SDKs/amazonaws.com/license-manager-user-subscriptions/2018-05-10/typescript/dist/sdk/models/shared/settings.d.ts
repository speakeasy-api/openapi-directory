import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The registered identity provider’s product related configuration settings such as the subnets to provision VPC endpoints, and the security group ID that is associated with the VPC endpoints. The security group should permit inbound TCP port 1688 communication from resources in the VPC.
 */
export declare class Settings extends SpeakeasyBase {
    securityGroupId: string;
    subnets: string[];
}
