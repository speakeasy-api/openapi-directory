import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteTransitGatewayPolicyTableActionEnum {
    DeleteTransitGatewayPolicyTable = "DeleteTransitGatewayPolicyTable"
}
export declare enum POSTDeleteTransitGatewayPolicyTableVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeleteTransitGatewayPolicyTableRequest extends SpeakeasyBase {
    action: POSTDeleteTransitGatewayPolicyTableActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteTransitGatewayPolicyTableVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteTransitGatewayPolicyTableResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
