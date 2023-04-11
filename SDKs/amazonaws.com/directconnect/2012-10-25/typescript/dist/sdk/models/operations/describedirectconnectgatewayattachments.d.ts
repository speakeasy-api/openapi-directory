import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeDirectConnectGatewayAttachmentsXAmzTargetEnum {
    OvertureServiceDescribeDirectConnectGatewayAttachments = "OvertureService.DescribeDirectConnectGatewayAttachments"
}
export declare class DescribeDirectConnectGatewayAttachmentsRequest extends SpeakeasyBase {
    describeDirectConnectGatewayAttachmentsRequest: shared.DescribeDirectConnectGatewayAttachmentsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDirectConnectGatewayAttachmentsXAmzTargetEnum;
}
export declare class DescribeDirectConnectGatewayAttachmentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeDirectConnectGatewayAttachmentsResult?: shared.DescribeDirectConnectGatewayAttachmentsResult;
    /**
     * DirectConnectClientException
     */
    directConnectClientException?: any;
    /**
     * DirectConnectServerException
     */
    directConnectServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
