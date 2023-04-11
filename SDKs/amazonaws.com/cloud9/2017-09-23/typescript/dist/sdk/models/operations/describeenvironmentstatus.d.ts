import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEnvironmentStatusXAmzTargetEnum {
    AWSCloud9WorkspaceManagementServiceDescribeEnvironmentStatus = "AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus"
}
export declare class DescribeEnvironmentStatusRequest extends SpeakeasyBase {
    describeEnvironmentStatusRequest: shared.DescribeEnvironmentStatusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEnvironmentStatusXAmzTargetEnum;
}
export declare class DescribeEnvironmentStatusResponse extends SpeakeasyBase {
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
    describeEnvironmentStatusResult?: shared.DescribeEnvironmentStatusResult;
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
