import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateReplicationTaskXAmzTargetEnum {
    AmazonDMSv20160101CreateReplicationTask = "AmazonDMSv20160101.CreateReplicationTask"
}
export declare class CreateReplicationTaskRequest extends SpeakeasyBase {
    createReplicationTaskMessage: shared.CreateReplicationTaskMessage;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateReplicationTaskXAmzTargetEnum;
}
export declare class CreateReplicationTaskResponse extends SpeakeasyBase {
    /**
     * AccessDeniedFault
     */
    accessDeniedFault?: any;
    contentType: string;
    /**
     * Success
     */
    createReplicationTaskResponse?: shared.CreateReplicationTaskResponse;
    /**
     * InvalidResourceStateFault
     */
    invalidResourceStateFault?: any;
    /**
     * KMSKeyNotAccessibleFault
     */
    kmsKeyNotAccessibleFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsFault
     */
    resourceAlreadyExistsFault?: any;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    /**
     * ResourceQuotaExceededFault
     */
    resourceQuotaExceededFault?: any;
}
