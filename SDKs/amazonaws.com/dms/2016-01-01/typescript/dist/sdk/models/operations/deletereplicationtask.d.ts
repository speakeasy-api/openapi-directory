import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteReplicationTaskXAmzTargetEnum {
    AmazonDMSv20160101DeleteReplicationTask = "AmazonDMSv20160101.DeleteReplicationTask"
}
export declare class DeleteReplicationTaskRequest extends SpeakeasyBase {
    deleteReplicationTaskMessage: shared.DeleteReplicationTaskMessage;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteReplicationTaskXAmzTargetEnum;
}
export declare class DeleteReplicationTaskResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteReplicationTaskResponse?: shared.DeleteReplicationTaskResponse;
    /**
     * InvalidResourceStateFault
     */
    invalidResourceStateFault?: any;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
