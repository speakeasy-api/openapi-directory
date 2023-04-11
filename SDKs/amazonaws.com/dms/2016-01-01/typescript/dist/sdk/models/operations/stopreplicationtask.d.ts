import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopReplicationTaskXAmzTargetEnum {
    AmazonDMSv20160101StopReplicationTask = "AmazonDMSv20160101.StopReplicationTask"
}
export declare class StopReplicationTaskRequest extends SpeakeasyBase {
    stopReplicationTaskMessage: shared.StopReplicationTaskMessage;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopReplicationTaskXAmzTargetEnum;
}
export declare class StopReplicationTaskResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidResourceStateFault
     */
    invalidResourceStateFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    /**
     * Success
     */
    stopReplicationTaskResponse?: shared.StopReplicationTaskResponse;
}
