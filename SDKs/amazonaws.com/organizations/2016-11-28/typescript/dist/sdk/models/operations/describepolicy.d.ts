import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribePolicyXAmzTargetEnum {
    AWSOrganizationsV20161128DescribePolicy = "AWSOrganizationsV20161128.DescribePolicy"
}
export declare class DescribePolicyRequest extends SpeakeasyBase {
    describePolicyRequest: shared.DescribePolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePolicyXAmzTargetEnum;
}
export declare class DescribePolicyResponse extends SpeakeasyBase {
    /**
     * AWSOrganizationsNotInUseException
     */
    awsOrganizationsNotInUseException?: any;
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describePolicyResponse?: shared.DescribePolicyResponse;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * PolicyNotFoundException
     */
    policyNotFoundException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UnsupportedAPIEndpointException
     */
    unsupportedAPIEndpointException?: any;
}
