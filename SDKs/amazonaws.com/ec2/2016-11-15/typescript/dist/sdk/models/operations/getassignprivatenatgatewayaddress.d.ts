import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAssignPrivateNatGatewayAddressActionEnum {
    AssignPrivateNatGatewayAddress = "AssignPrivateNatGatewayAddress"
}
export declare enum GETAssignPrivateNatGatewayAddressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETAssignPrivateNatGatewayAddressRequest extends SpeakeasyBase {
    action: GETAssignPrivateNatGatewayAddressActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The NAT gateway ID.
     */
    natGatewayId: string;
    /**
     * The private IPv4 addresses you want to assign to the private NAT gateway.
     */
    privateIpAddress?: string[];
    /**
     * The number of private IP addresses to assign to the NAT gateway. You can't specify this parameter when also specifying private IP addresses.
     */
    privateIpAddressCount?: number;
    version: GETAssignPrivateNatGatewayAddressVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAssignPrivateNatGatewayAddressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
