import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeResourcePolicyXAmzTargetEnum {
    Comprehend20171127DescribeResourcePolicy = "Comprehend_20171127.DescribeResourcePolicy"
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
     * InternalServerException
     */
    internalServerException?: any;
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
}
