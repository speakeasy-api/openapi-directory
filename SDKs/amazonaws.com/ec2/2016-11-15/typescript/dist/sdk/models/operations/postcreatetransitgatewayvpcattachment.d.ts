import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateTransitGatewayVpcAttachmentActionEnum {
    CreateTransitGatewayVpcAttachment = "CreateTransitGatewayVpcAttachment"
}
export declare enum POSTCreateTransitGatewayVpcAttachmentVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateTransitGatewayVpcAttachmentRequest extends SpeakeasyBase {
    action: POSTCreateTransitGatewayVpcAttachmentActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateTransitGatewayVpcAttachmentVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateTransitGatewayVpcAttachmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
