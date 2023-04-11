import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteTransitGatewayConnectActionEnum {
    DeleteTransitGatewayConnect = "DeleteTransitGatewayConnect"
}
export declare enum POSTDeleteTransitGatewayConnectVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeleteTransitGatewayConnectRequest extends SpeakeasyBase {
    action: POSTDeleteTransitGatewayConnectActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteTransitGatewayConnectVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteTransitGatewayConnectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
