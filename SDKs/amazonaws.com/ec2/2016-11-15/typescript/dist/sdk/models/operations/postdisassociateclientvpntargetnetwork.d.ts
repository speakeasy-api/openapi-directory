import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDisassociateClientVpnTargetNetworkActionEnum {
    DisassociateClientVpnTargetNetwork = "DisassociateClientVpnTargetNetwork"
}
export declare enum POSTDisassociateClientVpnTargetNetworkVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDisassociateClientVpnTargetNetworkRequest extends SpeakeasyBase {
    action: POSTDisassociateClientVpnTargetNetworkActionEnum;
    requestBody?: Uint8Array;
    version: POSTDisassociateClientVpnTargetNetworkVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDisassociateClientVpnTargetNetworkResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
