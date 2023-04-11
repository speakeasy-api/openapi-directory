import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetryDataReplicationRequestBody extends SpeakeasyBase {
    /**
     * The ID of the Source Server whose data replication should be retried.
     */
    sourceServerID: string;
}
export declare class RetryDataReplicationRequest extends SpeakeasyBase {
    requestBody: RetryDataReplicationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RetryDataReplicationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    sourceServer?: shared.SourceServer;
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
