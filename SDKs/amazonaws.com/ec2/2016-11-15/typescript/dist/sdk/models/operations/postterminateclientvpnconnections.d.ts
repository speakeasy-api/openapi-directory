import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTTerminateClientVpnConnectionsActionEnum {
    TerminateClientVpnConnections = "TerminateClientVpnConnections"
}
export declare enum POSTTerminateClientVpnConnectionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTTerminateClientVpnConnectionsRequest extends SpeakeasyBase {
    action: POSTTerminateClientVpnConnectionsActionEnum;
    requestBody?: Uint8Array;
    version: POSTTerminateClientVpnConnectionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTTerminateClientVpnConnectionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
