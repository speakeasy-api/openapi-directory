import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration of your VPC and the associated VPC endpoint. The VPC endpoint is an Amazon Web Services PrivateLink resource that allows access to your App Runner services from within an Amazon VPC.
 */
export declare class IngressVpcConfiguration extends SpeakeasyBase {
    vpcEndpointId?: string;
    vpcId?: string;
}
