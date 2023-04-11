import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeWorkflowXAmzTargetEnum {
    TransferServiceDescribeWorkflow = "TransferService.DescribeWorkflow"
}
export declare class DescribeWorkflowRequest extends SpeakeasyBase {
    describeWorkflowRequest: shared.DescribeWorkflowRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeWorkflowXAmzTargetEnum;
}
export declare class DescribeWorkflowResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeWorkflowResponse?: shared.DescribeWorkflowResponse;
    /**
     * InternalServiceError
     */
    internalServiceError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
