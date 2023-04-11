import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateRunGroupRequestBody extends SpeakeasyBase {
    /**
     * The maximum number of CPUs to use.
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
}
export declare class UpdateRunGroupRequest extends SpeakeasyBase {
    requestBody: UpdateRunGroupRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The group's ID.
     */
    id: string;
}
export declare class UpdateRunGroupResponse extends SpeakeasyBase {
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
