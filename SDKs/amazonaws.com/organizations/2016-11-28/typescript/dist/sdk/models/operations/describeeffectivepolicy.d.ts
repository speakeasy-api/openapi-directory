import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEffectivePolicyXAmzTargetEnum {
    AWSOrganizationsV20161128DescribeEffectivePolicy = "AWSOrganizationsV20161128.DescribeEffectivePolicy"
}
export declare class DescribeEffectivePolicyRequest extends SpeakeasyBase {
    describeEffectivePolicyRequest: shared.DescribeEffectivePolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEffectivePolicyXAmzTargetEnum;
}
export declare class DescribeEffectivePolicyResponse extends SpeakeasyBase {
    /**
     * AWSOrganizationsNotInUseException
     */
    awsOrganizationsNotInUseException?: any;
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConstraintViolationException
     */
    constraintViolationException?: any;
    contentType: string;
    /**
     * Success
     */
    describeEffectivePolicyResponse?: shared.DescribeEffectivePolicyResponse;
    /**
     * EffectivePolicyNotFoundException
     */
    effectivePolicyNotFoundException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TargetNotFoundException
     */
    targetNotFoundException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UnsupportedAPIEndpointException
     */
    unsupportedAPIEndpointException?: any;
}
