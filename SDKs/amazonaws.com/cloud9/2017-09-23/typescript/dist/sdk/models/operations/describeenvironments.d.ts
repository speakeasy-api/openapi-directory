import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEnvironmentsXAmzTargetEnum {
    AWSCloud9WorkspaceManagementServiceDescribeEnvironments = "AWSCloud9WorkspaceManagementService.DescribeEnvironments"
}
export declare class DescribeEnvironmentsRequest extends SpeakeasyBase {
    describeEnvironmentsRequest: shared.DescribeEnvironmentsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEnvironmentsXAmzTargetEnum;
}
export declare class DescribeEnvironmentsResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    describeEnvironmentsResult?: shared.DescribeEnvironmentsResult;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
