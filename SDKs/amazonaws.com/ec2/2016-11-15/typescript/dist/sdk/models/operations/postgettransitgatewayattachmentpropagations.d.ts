import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetTransitGatewayAttachmentPropagationsActionEnum {
    GetTransitGatewayAttachmentPropagations = "GetTransitGatewayAttachmentPropagations"
}
export declare enum POSTGetTransitGatewayAttachmentPropagationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTGetTransitGatewayAttachmentPropagationsRequest extends SpeakeasyBase {
    action: POSTGetTransitGatewayAttachmentPropagationsActionEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTGetTransitGatewayAttachmentPropagationsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetTransitGatewayAttachmentPropagationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
