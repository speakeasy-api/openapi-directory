import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSourceRepositoryCloneUrlsRequest extends SpeakeasyBase {
    /**
     * The name of the project in the space.
     */
    projectName: string;
    /**
     * The name of the source repository.
     */
    sourceRepositoryName: string;
    /**
     * The name of the space.
     */
    spaceName: string;
}
export declare class GetSourceRepositoryCloneUrlsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    getSourceRepositoryCloneUrlsResponse?: shared.GetSourceRepositoryCloneUrlsResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
