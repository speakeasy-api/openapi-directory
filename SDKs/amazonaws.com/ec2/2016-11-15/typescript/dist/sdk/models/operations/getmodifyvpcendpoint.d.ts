import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GETModifyVpcEndpointActionEnum {
    ModifyVpcEndpoint = "ModifyVpcEndpoint"
}
/**
 * Describes the DNS options for an endpoint.
 */
export declare class GETModifyVpcEndpointDNSOptions extends SpeakeasyBase {
    dnsRecordIpType?: shared.DnsRecordIpTypeEnum;
    privateDnsOnlyForInboundResolverEndpoint?: boolean;
}
/**
 * The IP address type for the endpoint.
 */
export declare enum GETModifyVpcEndpointIPAddressTypeEnum {
    Ipv4 = "ipv4",
    Dualstack = "dualstack",
    Ipv6 = "ipv6"
}
export declare enum GETModifyVpcEndpointVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETModifyVpcEndpointRequest extends SpeakeasyBase {
    action: GETModifyVpcEndpointActionEnum;
    /**
     * (Gateway endpoint) The IDs of the route tables to associate with the endpoint.
     */
    addRouteTableId?: string[];
    /**
     * (Interface endpoint) The IDs of the security groups to associate with the network interface.
     */
    addSecurityGroupId?: string[];
    /**
     * (Interface and Gateway Load Balancer endpoints) The IDs of the subnets in which to serve the endpoint. For a Gateway Load Balancer endpoint, you can specify only one subnet.
     */
    addSubnetId?: string[];
    /**
     * The DNS options for the endpoint.
     */
    dnsOptions?: GETModifyVpcEndpointDNSOptions;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The IP address type for the endpoint.
     */
    ipAddressType?: GETModifyVpcEndpointIPAddressTypeEnum;
    /**
     * (Interface and gateway endpoints) A policy to attach to the endpoint that controls access to the service. The policy must be in valid JSON format.
     */
    policyDocument?: string;
    /**
     * (Interface endpoint) Indicates whether a private hosted zone is associated with the VPC.
     */
    privateDnsEnabled?: boolean;
    /**
     * (Gateway endpoint) The IDs of the route tables to disassociate from the endpoint.
     */
    removeRouteTableId?: string[];
    /**
     * (Interface endpoint) The IDs of the security groups to disassociate from the network interface.
     */
    removeSecurityGroupId?: string[];
    /**
     * (Interface endpoint) The IDs of the subnets from which to remove the endpoint.
     */
    removeSubnetId?: string[];
    /**
     * (Gateway endpoint) Specify <code>true</code> to reset the policy document to the default policy. The default policy allows full access to the service.
     */
    resetPolicy?: boolean;
    version: GETModifyVpcEndpointVersionEnum;
    /**
     * The ID of the endpoint.
     */
    vpcEndpointId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyVpcEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
