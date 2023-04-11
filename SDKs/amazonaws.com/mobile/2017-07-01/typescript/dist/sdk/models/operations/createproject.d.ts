import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateProjectRequestBody extends SpeakeasyBase {
    /**
     *  Binary file data.
     */
    contents?: string;
}
export declare class CreateProjectRequest extends SpeakeasyBase {
    requestBody: CreateProjectRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  Name of the project.
     */
    name?: string;
    /**
     *  Default region where project resources should be created.
     */
    region?: string;
    /**
     *  Unique identifier for an exported snapshot of project configuration. This snapshot identifier is included in the share URL when a project is exported.
     */
    snapshotId?: string;
}
export declare class CreateProjectResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: shared.BadRequestException;
    contentType: string;
    /**
     * Success
     */
    createProjectResult?: shared.CreateProjectResult;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: shared.ServiceUnavailableException;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: shared.TooManyRequestsException;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: shared.UnauthorizedException;
}
