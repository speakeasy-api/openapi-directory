import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateEnvironmentMembershipXAmzTargetEnum {
    AWSCloud9WorkspaceManagementServiceUpdateEnvironmentMembership = "AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership"
}
export declare class UpdateEnvironmentMembershipRequest extends SpeakeasyBase {
    updateEnvironmentMembershipRequest: shared.UpdateEnvironmentMembershipRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateEnvironmentMembershipXAmzTargetEnum;
}
export declare class UpdateEnvironmentMembershipResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    updateEnvironmentMembershipResult?: shared.UpdateEnvironmentMembershipResult;
}
