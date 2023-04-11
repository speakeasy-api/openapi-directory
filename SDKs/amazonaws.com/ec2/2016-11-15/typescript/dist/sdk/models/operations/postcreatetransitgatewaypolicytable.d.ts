import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateTransitGatewayPolicyTableActionEnum {
    CreateTransitGatewayPolicyTable = "CreateTransitGatewayPolicyTable"
}
export declare enum POSTCreateTransitGatewayPolicyTableVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateTransitGatewayPolicyTableRequest extends SpeakeasyBase {
    action: POSTCreateTransitGatewayPolicyTableActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateTransitGatewayPolicyTableVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateTransitGatewayPolicyTableResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
