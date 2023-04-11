import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateRunGroupRequestBody extends SpeakeasyBase {
    /**
     * The maximum number of CPUs to use in the group.
     */
    maxCpus?: number;
    /**
     * A maximum run time for the group in minutes.
     */
    maxDuration?: number;
    /**
     * The maximum number of concurrent runs for the group.
     */
    maxRuns?: number;
    /**
     * A name for the group.
     */
    name?: string;
    /**
     * To ensure that requests don't run multiple times, specify a unique ID for each request.
     */
    requestId: string;
    /**
     * Tags for the group.
     */
    tags?: Record<string, string>;
}
export declare class CreateRunGroupRequest extends SpeakeasyBase {
    requestBody: CreateRunGroupRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateRunGroupResponse extends SpeakeasyBase {
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
    createRunGroupResponse?: shared.CreateRunGroupResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * RequestTimeoutException
     */
    requestTimeoutException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
