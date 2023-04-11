import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateEnvironmentEc2XAmzTargetEnum {
    AWSCloud9WorkspaceManagementServiceCreateEnvironmentEc2 = "AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2"
}
export declare class CreateEnvironmentEc2Request extends SpeakeasyBase {
    createEnvironmentEc2Request: shared.CreateEnvironmentEc2Request;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEnvironmentEc2XAmzTargetEnum;
}
export declare class CreateEnvironmentEc2Response extends SpeakeasyBase {
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
    createEnvironmentEc2Result?: shared.CreateEnvironmentEc2Result;
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
