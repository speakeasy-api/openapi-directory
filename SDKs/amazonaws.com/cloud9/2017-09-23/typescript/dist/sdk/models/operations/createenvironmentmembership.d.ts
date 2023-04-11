import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateEnvironmentMembershipXAmzTargetEnum {
    AWSCloud9WorkspaceManagementServiceCreateEnvironmentMembership = "AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership"
}
export declare class CreateEnvironmentMembershipRequest extends SpeakeasyBase {
    createEnvironmentMembershipRequest: shared.CreateEnvironmentMembershipRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEnvironmentMembershipXAmzTargetEnum;
}
export declare class CreateEnvironmentMembershipResponse extends SpeakeasyBase {
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
    createEnvironmentMembershipResult?: shared.CreateEnvironmentMembershipResult;
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
