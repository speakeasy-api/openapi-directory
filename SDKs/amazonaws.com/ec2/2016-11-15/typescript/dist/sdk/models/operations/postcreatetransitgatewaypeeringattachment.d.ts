import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateTransitGatewayPeeringAttachmentActionEnum {
    CreateTransitGatewayPeeringAttachment = "CreateTransitGatewayPeeringAttachment"
}
export declare enum POSTCreateTransitGatewayPeeringAttachmentVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateTransitGatewayPeeringAttachmentRequest extends SpeakeasyBase {
    action: POSTCreateTransitGatewayPeeringAttachmentActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateTransitGatewayPeeringAttachmentVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateTransitGatewayPeeringAttachmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
