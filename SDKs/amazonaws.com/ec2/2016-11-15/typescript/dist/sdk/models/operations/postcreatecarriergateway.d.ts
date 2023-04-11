import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateCarrierGatewayActionEnum {
    CreateCarrierGateway = "CreateCarrierGateway"
}
export declare enum POSTCreateCarrierGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateCarrierGatewayRequest extends SpeakeasyBase {
    action: POSTCreateCarrierGatewayActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateCarrierGatewayVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateCarrierGatewayResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
