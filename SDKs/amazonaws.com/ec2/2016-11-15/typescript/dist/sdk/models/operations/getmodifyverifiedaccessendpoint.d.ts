import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GETModifyVerifiedAccessEndpointActionEnum {
    ModifyVerifiedAccessEndpoint = "ModifyVerifiedAccessEndpoint"
}
/**
 * Describes a load balancer when creating an Amazon Web Services Verified Access endpoint using the <code>load-balancer</code> type.
 */
export declare class GETModifyVerifiedAccessEndpointLoadBalancerOptions extends SpeakeasyBase {
    port?: number;
    protocol?: shared.VerifiedAccessEndpointProtocolEnum;
    subnetIds?: string[];
}
/**
 * Options for a network-interface type Verified Access endpoint.
 */
export declare class GETModifyVerifiedAccessEndpointNetworkInterfaceOptions extends SpeakeasyBase {
    port?: number;
    protocol?: shared.VerifiedAccessEndpointProtocolEnum;
}
export declare enum GETModifyVerifiedAccessEndpointVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETModifyVerifiedAccessEndpointRequest extends SpeakeasyBase {
    action: GETModifyVerifiedAccessEndpointActionEnum;
    /**
     * A unique, case-sensitive token that you provide to ensure idempotency of your modification request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.
     */
    clientToken?: string;
    /**
     * A description for the Amazon Web Services Verified Access endpoint.
     */
    description?: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The load balancer details if creating the Amazon Web Services Verified Access endpoint as <code>load-balancer</code>type.
     */
    loadBalancerOptions?: GETModifyVerifiedAccessEndpointLoadBalancerOptions;
    /**
     * The network interface options.
     */
    networkInterfaceOptions?: GETModifyVerifiedAccessEndpointNetworkInterfaceOptions;
    /**
     * The ID of the Amazon Web Services Verified Access endpoint.
     */
    verifiedAccessEndpointId: string;
    /**
     * The ID of the Amazon Web Services Verified Access group.
     */
    verifiedAccessGroupId?: string;
    version: GETModifyVerifiedAccessEndpointVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyVerifiedAccessEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
