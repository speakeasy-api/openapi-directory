import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum MoveReplicationTaskXAmzTargetEnum {
    AmazonDMSv20160101MoveReplicationTask = "AmazonDMSv20160101.MoveReplicationTask"
}
export declare class MoveReplicationTaskRequest extends SpeakeasyBase {
    moveReplicationTaskMessage: shared.MoveReplicationTaskMessage;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: MoveReplicationTaskXAmzTargetEnum;
}
export declare class MoveReplicationTaskResponse extends SpeakeasyBase {
    /**
     * AccessDeniedFault
     */
    accessDeniedFault?: any;
    contentType: string;
    /**
     * InvalidResourceStateFault
     */
    invalidResourceStateFault?: any;
    /**
     * KMSKeyNotAccessibleFault
     */
    kmsKeyNotAccessibleFault?: any;
    /**
     * Success
     */
    moveReplicationTaskResponse?: shared.MoveReplicationTaskResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    /**
     * ResourceQuotaExceededFault
     */
    resourceQuotaExceededFault?: any;
}
