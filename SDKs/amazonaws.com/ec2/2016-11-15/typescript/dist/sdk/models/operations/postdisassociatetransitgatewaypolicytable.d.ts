import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDisassociateTransitGatewayPolicyTableActionEnum {
    DisassociateTransitGatewayPolicyTable = "DisassociateTransitGatewayPolicyTable"
}
export declare enum POSTDisassociateTransitGatewayPolicyTableVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDisassociateTransitGatewayPolicyTableRequest extends SpeakeasyBase {
    action: POSTDisassociateTransitGatewayPolicyTableActionEnum;
    requestBody?: Uint8Array;
    version: POSTDisassociateTransitGatewayPolicyTableVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDisassociateTransitGatewayPolicyTableResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
