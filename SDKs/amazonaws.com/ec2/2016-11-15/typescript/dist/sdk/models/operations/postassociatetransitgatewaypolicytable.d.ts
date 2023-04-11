import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAssociateTransitGatewayPolicyTableActionEnum {
    AssociateTransitGatewayPolicyTable = "AssociateTransitGatewayPolicyTable"
}
export declare enum POSTAssociateTransitGatewayPolicyTableVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTAssociateTransitGatewayPolicyTableRequest extends SpeakeasyBase {
    action: POSTAssociateTransitGatewayPolicyTableActionEnum;
    requestBody?: Uint8Array;
    version: POSTAssociateTransitGatewayPolicyTableVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAssociateTransitGatewayPolicyTableResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
