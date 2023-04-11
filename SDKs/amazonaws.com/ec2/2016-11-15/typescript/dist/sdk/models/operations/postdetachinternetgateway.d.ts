import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDetachInternetGatewayActionEnum {
    DetachInternetGateway = "DetachInternetGateway"
}
export declare enum POSTDetachInternetGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDetachInternetGatewayRequest extends SpeakeasyBase {
    action: POSTDetachInternetGatewayActionEnum;
    requestBody?: Uint8Array;
    version: POSTDetachInternetGatewayVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDetachInternetGatewayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
