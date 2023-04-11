import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDisassociateClientVpnTargetNetworkActionEnum {
    DisassociateClientVpnTargetNetwork = "DisassociateClientVpnTargetNetwork"
}
export declare enum GETDisassociateClientVpnTargetNetworkVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDisassociateClientVpnTargetNetworkRequest extends SpeakeasyBase {
    action: GETDisassociateClientVpnTargetNetworkActionEnum;
    /**
     * The ID of the target network association.
     */
    associationId: string;
    /**
     * The ID of the Client VPN endpoint from which to disassociate the target network.
     */
    clientVpnEndpointId: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    version: GETDisassociateClientVpnTargetNetworkVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDisassociateClientVpnTargetNetworkResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
