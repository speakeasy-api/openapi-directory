import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFailbackReplicationConfigurationRequestBody extends SpeakeasyBase {
    /**
     * The ID of the Recovery Instance whose failback replication configuration should be returned.
     */
    recoveryInstanceID: string;
}
export declare class GetFailbackReplicationConfigurationRequest extends SpeakeasyBase {
    requestBody: GetFailbackReplicationConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetFailbackReplicationConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getFailbackReplicationConfigurationResponse?: shared.GetFailbackReplicationConfigurationResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
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
