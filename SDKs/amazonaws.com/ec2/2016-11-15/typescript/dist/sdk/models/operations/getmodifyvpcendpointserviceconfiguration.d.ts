import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyVpcEndpointServiceConfigurationActionEnum {
    ModifyVpcEndpointServiceConfiguration = "ModifyVpcEndpointServiceConfiguration"
}
export declare enum GETModifyVpcEndpointServiceConfigurationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETModifyVpcEndpointServiceConfigurationRequest extends SpeakeasyBase {
    /**
     * Indicates whether requests to create an endpoint to your service must be accepted.
     */
    acceptanceRequired?: boolean;
    action: GETModifyVpcEndpointServiceConfigurationActionEnum;
    /**
     * The Amazon Resource Names (ARNs) of Gateway Load Balancers to add to your service configuration.
     */
    addGatewayLoadBalancerArn?: string[];
    /**
     * The Amazon Resource Names (ARNs) of Network Load Balancers to add to your service configuration.
     */
    addNetworkLoadBalancerArn?: string[];
    /**
     * The IP address types to add to your service configuration.
     */
    addSupportedIpAddressType?: string[];
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * (Interface endpoint configuration) The private DNS name to assign to the endpoint service.
     */
    privateDnsName?: string;
    /**
     * The Amazon Resource Names (ARNs) of Gateway Load Balancers to remove from your service configuration.
     */
    removeGatewayLoadBalancerArn?: string[];
    /**
     * The Amazon Resource Names (ARNs) of Network Load Balancers to remove from your service configuration.
     */
    removeNetworkLoadBalancerArn?: string[];
    /**
     * (Interface endpoint configuration) Removes the private DNS name of the endpoint service.
     */
    removePrivateDnsName?: boolean;
    /**
     * The IP address types to remove from your service configuration.
     */
    removeSupportedIpAddressType?: string[];
    /**
     * The ID of the service.
     */
    serviceId: string;
    version: GETModifyVpcEndpointServiceConfigurationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyVpcEndpointServiceConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
