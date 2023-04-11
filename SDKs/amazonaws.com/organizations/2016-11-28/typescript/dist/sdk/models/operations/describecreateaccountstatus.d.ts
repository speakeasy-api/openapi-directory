import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeCreateAccountStatusXAmzTargetEnum {
    AWSOrganizationsV20161128DescribeCreateAccountStatus = "AWSOrganizationsV20161128.DescribeCreateAccountStatus"
}
export declare class DescribeCreateAccountStatusRequest extends SpeakeasyBase {
    describeCreateAccountStatusRequest: shared.DescribeCreateAccountStatusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCreateAccountStatusXAmzTargetEnum;
}
export declare class DescribeCreateAccountStatusResponse extends SpeakeasyBase {
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
     * CreateAccountStatusNotFoundException
     */
    createAccountStatusNotFoundException?: any;
    /**
     * Success
     */
    describeCreateAccountStatusResponse?: shared.DescribeCreateAccountStatusResponse;
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
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UnsupportedAPIEndpointException
     */
    unsupportedAPIEndpointException?: any;
}
