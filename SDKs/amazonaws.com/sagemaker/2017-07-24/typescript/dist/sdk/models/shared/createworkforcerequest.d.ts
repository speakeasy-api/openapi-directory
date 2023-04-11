import { SpeakeasyBase } from "../../../internal/utils";
import { CognitoConfig } from "./cognitoconfig";
import { OidcConfig } from "./oidcconfig";
import { SourceIpConfig } from "./sourceipconfig";
import { Tag } from "./tag";
import { WorkforceVpcConfigRequest } from "./workforcevpcconfigrequest";
export declare class CreateWorkforceRequest extends SpeakeasyBase {
    cognitoConfig?: CognitoConfig;
    oidcConfig?: OidcConfig;
    /**
     * A list of IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Used to create an allow list of IP addresses for a private workforce. Workers will only be able to login to their worker portal from an IP address within this range. By default, a workforce isn't restricted to specific IP addresses.
     */
    sourceIpConfig?: SourceIpConfig;
    tags?: Tag[];
    workforceName: string;
    workforceVpcConfig?: WorkforceVpcConfigRequest;
}
