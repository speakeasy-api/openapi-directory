import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAcceptTransitGatewayPeeringAttachmentActionEnum {
    AcceptTransitGatewayPeeringAttachment = "AcceptTransitGatewayPeeringAttachment"
}
export declare enum POSTAcceptTransitGatewayPeeringAttachmentVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTAcceptTransitGatewayPeeringAttachmentRequest extends SpeakeasyBase {
    action: POSTAcceptTransitGatewayPeeringAttachmentActionEnum;
    requestBody?: Uint8Array;
    version: POSTAcceptTransitGatewayPeeringAttachmentVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAcceptTransitGatewayPeeringAttachmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
