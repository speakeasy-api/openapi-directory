import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAcceptTransitGatewayVpcAttachmentActionEnum {
    AcceptTransitGatewayVpcAttachment = "AcceptTransitGatewayVpcAttachment"
}
export declare enum POSTAcceptTransitGatewayVpcAttachmentVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTAcceptTransitGatewayVpcAttachmentRequest extends SpeakeasyBase {
    action: POSTAcceptTransitGatewayVpcAttachmentActionEnum;
    requestBody?: Uint8Array;
    version: POSTAcceptTransitGatewayVpcAttachmentVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAcceptTransitGatewayVpcAttachmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
