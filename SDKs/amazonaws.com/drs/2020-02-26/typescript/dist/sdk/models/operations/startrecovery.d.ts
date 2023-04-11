import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StartRecoveryRequestBody extends SpeakeasyBase {
    /**
     * Whether this Source Server Recovery operation is a drill or not.
     */
    isDrill?: boolean;
    /**
     * The Source Servers that we want to start a Recovery Job for.
     */
    sourceServers: shared.StartRecoveryRequestSourceServer[];
    /**
     * The tags to be associated with the Recovery Job.
     */
    tags?: Record<string, string>;
}
export declare class StartRecoveryRequest extends SpeakeasyBase {
    requestBody: StartRecoveryRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartRecoveryResponse extends SpeakeasyBase {
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
    startRecoveryResponse?: shared.StartRecoveryResponse;
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
}
