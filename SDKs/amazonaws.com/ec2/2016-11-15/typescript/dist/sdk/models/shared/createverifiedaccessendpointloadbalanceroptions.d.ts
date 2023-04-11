import { SpeakeasyBase } from "../../../internal/utils";
import { VerifiedAccessEndpointProtocolEnum } from "./verifiedaccessendpointprotocolenum";
/**
 * Describes a load balancer when creating an Amazon Web Services Verified Access endpoint using the <code>load-balancer</code> type.
 */
export declare class CreateVerifiedAccessEndpointLoadBalancerOptions extends SpeakeasyBase {
    loadBalancerArn?: string;
    port?: number;
    protocol?: VerifiedAccessEndpointProtocolEnum;
    subnetIds?: string[];
}
