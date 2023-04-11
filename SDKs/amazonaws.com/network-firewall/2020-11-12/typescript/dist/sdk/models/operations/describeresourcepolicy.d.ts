import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeResourcePolicyXAmzTargetEnum {
    NetworkFirewall20201112DescribeResourcePolicy = "NetworkFirewall_20201112.DescribeResourcePolicy"
}
export declare class DescribeResourcePolicyRequest extends SpeakeasyBase {
    describeResourcePolicyRequest: shared.DescribeResourcePolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeResourcePolicyXAmzTargetEnum;
}
export declare class DescribeResourcePolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeResourcePolicyResponse?: shared.DescribeResourcePolicyResponse;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
