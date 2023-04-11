import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartReplicationTaskXAmzTargetEnum {
    AmazonDMSv20160101StartReplicationTask = "AmazonDMSv20160101.StartReplicationTask"
}
export declare class StartReplicationTaskRequest extends SpeakeasyBase {
    startReplicationTaskMessage: shared.StartReplicationTaskMessage;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartReplicationTaskXAmzTargetEnum;
}
export declare class StartReplicationTaskResponse extends SpeakeasyBase {
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
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    /**
     * Success
     */
    startReplicationTaskResponse?: shared.StartReplicationTaskResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
