import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateTransitGatewayConnectPeerActionEnum {
    CreateTransitGatewayConnectPeer = "CreateTransitGatewayConnectPeer"
}
export declare enum POSTCreateTransitGatewayConnectPeerVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateTransitGatewayConnectPeerRequest extends SpeakeasyBase {
    action: POSTCreateTransitGatewayConnectPeerActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateTransitGatewayConnectPeerVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateTransitGatewayConnectPeerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
