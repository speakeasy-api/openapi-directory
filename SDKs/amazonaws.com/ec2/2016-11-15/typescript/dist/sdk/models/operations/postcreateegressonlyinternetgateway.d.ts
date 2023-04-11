import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateEgressOnlyInternetGatewayActionEnum {
    CreateEgressOnlyInternetGateway = "CreateEgressOnlyInternetGateway"
}
export declare enum POSTCreateEgressOnlyInternetGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateEgressOnlyInternetGatewayRequest extends SpeakeasyBase {
    action: POSTCreateEgressOnlyInternetGatewayActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateEgressOnlyInternetGatewayVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateEgressOnlyInternetGatewayResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
