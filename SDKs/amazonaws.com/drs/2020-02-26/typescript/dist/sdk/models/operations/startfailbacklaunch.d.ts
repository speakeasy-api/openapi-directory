import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StartFailbackLaunchRequestBody extends SpeakeasyBase {
    /**
     * The IDs of the Recovery Instance whose failback launch we want to request.
     */
    recoveryInstanceIDs: string[];
    /**
     * The tags to be associated with the failback launch Job.
     */
    tags?: Record<string, string>;
}
export declare class StartFailbackLaunchRequest extends SpeakeasyBase {
    requestBody: StartFailbackLaunchRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartFailbackLaunchResponse extends SpeakeasyBase {
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
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * Success
     */
    startFailbackLaunchResponse?: shared.StartFailbackLaunchResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
