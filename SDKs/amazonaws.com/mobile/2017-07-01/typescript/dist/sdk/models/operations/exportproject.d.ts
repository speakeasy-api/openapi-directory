import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExportProjectRequest extends SpeakeasyBase {
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
export declare class ExportProjectResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: shared.BadRequestException;
    contentType: string;
    /**
     * Success
     */
    exportProjectResult?: shared.ExportProjectResult;
    /**
     * InternalFailureException
     */
    internalFailureException?: shared.InternalFailureException;
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
