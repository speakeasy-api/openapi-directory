import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAssociateNatGatewayAddressActionEnum {
    AssociateNatGatewayAddress = "AssociateNatGatewayAddress"
}
export declare enum GETAssociateNatGatewayAddressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETAssociateNatGatewayAddressRequest extends SpeakeasyBase {
    action: GETAssociateNatGatewayAddressActionEnum;
    /**
     * The allocation IDs of EIPs that you want to associate with your NAT gateway.
     */
    allocationId: string[];
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The NAT gateway ID.
     */
    natGatewayId: string;
    /**
     * The private IPv4 addresses that you want to assign to the NAT gateway.
     */
    privateIpAddress?: string[];
    version: GETAssociateNatGatewayAddressVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAssociateNatGatewayAddressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
