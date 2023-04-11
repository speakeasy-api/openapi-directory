import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAttachVpnGatewayActionEnum {
    AttachVpnGateway = "AttachVpnGateway"
}
export declare enum GETAttachVpnGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETAttachVpnGatewayRequest extends SpeakeasyBase {
    action: GETAttachVpnGatewayActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    version: GETAttachVpnGatewayVersionEnum;
    /**
     * The ID of the VPC.
     */
    vpcId: string;
    /**
     * The ID of the virtual private gateway.
     */
    vpnGatewayId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAttachVpnGatewayResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
