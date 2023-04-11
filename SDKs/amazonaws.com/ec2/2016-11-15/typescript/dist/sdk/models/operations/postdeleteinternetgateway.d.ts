import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteInternetGatewayActionEnum {
    DeleteInternetGateway = "DeleteInternetGateway"
}
export declare enum POSTDeleteInternetGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeleteInternetGatewayRequest extends SpeakeasyBase {
    action: POSTDeleteInternetGatewayActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteInternetGatewayVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteInternetGatewayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
