import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RemoveRegionsFromReplicationXAmzTargetEnum {
    SecretsmanagerRemoveRegionsFromReplication = "secretsmanager.RemoveRegionsFromReplication"
}
export declare class RemoveRegionsFromReplicationRequest extends SpeakeasyBase {
    removeRegionsFromReplicationRequest: shared.RemoveRegionsFromReplicationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveRegionsFromReplicationXAmzTargetEnum;
}
export declare class RemoveRegionsFromReplicationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServiceError
     */
    internalServiceError?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    removeRegionsFromReplicationResponse?: shared.RemoveRegionsFromReplicationResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
