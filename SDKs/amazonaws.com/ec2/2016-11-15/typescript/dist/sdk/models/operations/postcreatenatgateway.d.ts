import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateNatGatewayActionEnum {
    CreateNatGateway = "CreateNatGateway"
}
export declare enum POSTCreateNatGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateNatGatewayRequest extends SpeakeasyBase {
    action: POSTCreateNatGatewayActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateNatGatewayVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateNatGatewayResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
