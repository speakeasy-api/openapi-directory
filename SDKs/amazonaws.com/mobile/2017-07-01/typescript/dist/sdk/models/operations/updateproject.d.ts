import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateProjectRequestBody extends SpeakeasyBase {
    /**
     *  Binary file data.
     */
    contents?: string;
}
export declare class UpdateProjectRequest extends SpeakeasyBase {
    requestBody: UpdateProjectRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  Unique project identifier.
     */
    projectId: string;
}
export declare class UpdateProjectResponse extends SpeakeasyBase {
    /**
     * AccountActionRequiredException
     */
    accountActionRequiredException?: shared.AccountActionRequiredException;
    /**
     * BadRequestException
     */
    badRequestException?: shared.BadRequestException;
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: shared.InternalFailureException;
    /**
     * LimitExceededException
     */
    limitExceededException?: shared.LimitExceededException;
    /**
     * NotFoundException
     */
    notFoundException?: shared.NotFoundException;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: shared.ServiceUnavailableException;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: shared.TooManyRequestsException;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: shared.UnauthorizedException;
    /**
     * Success
     */
    updateProjectResult?: shared.UpdateProjectResult;
}
