import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETUnassignPrivateNatGatewayAddressActionEnum {
    UnassignPrivateNatGatewayAddress = "UnassignPrivateNatGatewayAddress"
}
export declare enum GETUnassignPrivateNatGatewayAddressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETUnassignPrivateNatGatewayAddressRequest extends SpeakeasyBase {
    action: GETUnassignPrivateNatGatewayAddressActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The maximum amount of time to wait (in seconds) before forcibly releasing the IP addresses if connections are still in progress. Default value is 350 seconds.
     */
    maxDrainDurationSeconds?: number;
    /**
     * The NAT gateway ID.
     */
    natGatewayId: string;
    /**
     * The private IPv4 addresses you want to unassign.
     */
    privateIpAddress: string[];
    version: GETUnassignPrivateNatGatewayAddressVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETUnassignPrivateNatGatewayAddressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
