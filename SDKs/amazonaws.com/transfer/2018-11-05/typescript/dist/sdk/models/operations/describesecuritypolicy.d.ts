import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeSecurityPolicyXAmzTargetEnum {
    TransferServiceDescribeSecurityPolicy = "TransferService.DescribeSecurityPolicy"
}
export declare class DescribeSecurityPolicyRequest extends SpeakeasyBase {
    describeSecurityPolicyRequest: shared.DescribeSecurityPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSecurityPolicyXAmzTargetEnum;
}
export declare class DescribeSecurityPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeSecurityPolicyResponse?: shared.DescribeSecurityPolicyResponse;
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
