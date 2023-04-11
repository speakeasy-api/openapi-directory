import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteReplicationConfigurationTemplateRequestBody extends SpeakeasyBase {
    /**
     * Request to delete Replication Configuration Template from service by Replication Configuration Template ID.
     */
    replicationConfigurationTemplateID: string;
}
export declare class DeleteReplicationConfigurationTemplateRequest extends SpeakeasyBase {
    requestBody: DeleteReplicationConfigurationTemplateRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteReplicationConfigurationTemplateResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteReplicationConfigurationTemplateResponse?: Record<string, any>;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
}
