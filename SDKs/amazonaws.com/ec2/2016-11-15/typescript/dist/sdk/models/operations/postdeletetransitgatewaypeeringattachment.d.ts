import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteTransitGatewayPeeringAttachmentActionEnum {
    DeleteTransitGatewayPeeringAttachment = "DeleteTransitGatewayPeeringAttachment"
}
export declare enum POSTDeleteTransitGatewayPeeringAttachmentVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeleteTransitGatewayPeeringAttachmentRequest extends SpeakeasyBase {
    action: POSTDeleteTransitGatewayPeeringAttachmentActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteTransitGatewayPeeringAttachmentVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteTransitGatewayPeeringAttachmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
