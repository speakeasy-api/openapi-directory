import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Returns a list of VPC Ingress Connections based on the filter provided. It can return either <code>ServiceArn</code> or <code>VpcEndpointId</code>, or both.
 */
export declare class ListVpcIngressConnectionsFilter extends SpeakeasyBase {
    serviceArn?: string;
    vpcEndpointId?: string;
}
