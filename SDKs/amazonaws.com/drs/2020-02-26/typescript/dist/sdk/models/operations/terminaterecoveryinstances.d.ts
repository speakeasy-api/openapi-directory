import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TerminateRecoveryInstancesRequestBody extends SpeakeasyBase {
    /**
     * The IDs of the Recovery Instances that should be terminated.
     */
    recoveryInstanceIDs: string[];
}
export declare class TerminateRecoveryInstancesRequest extends SpeakeasyBase {
    requestBody: TerminateRecoveryInstancesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TerminateRecoveryInstancesResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    terminateRecoveryInstancesResponse?: shared.TerminateRecoveryInstancesResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
}
