import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAssociateClientVpnTargetNetworkActionEnum {
    AssociateClientVpnTargetNetwork = "AssociateClientVpnTargetNetwork"
}
export declare enum GETAssociateClientVpnTargetNetworkVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETAssociateClientVpnTargetNetworkRequest extends SpeakeasyBase {
    action: GETAssociateClientVpnTargetNetworkActionEnum;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.
     */
    clientToken?: string;
    /**
     * The ID of the Client VPN endpoint.
     */
    clientVpnEndpointId: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the subnet to associate with the Client VPN endpoint.
     */
    subnetId: string;
    version: GETAssociateClientVpnTargetNetworkVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAssociateClientVpnTargetNetworkResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
