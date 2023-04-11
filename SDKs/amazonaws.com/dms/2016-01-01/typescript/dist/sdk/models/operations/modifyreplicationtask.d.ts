import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ModifyReplicationTaskXAmzTargetEnum {
    AmazonDMSv20160101ModifyReplicationTask = "AmazonDMSv20160101.ModifyReplicationTask"
}
export declare class ModifyReplicationTaskRequest extends SpeakeasyBase {
    modifyReplicationTaskMessage: shared.ModifyReplicationTaskMessage;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyReplicationTaskXAmzTargetEnum;
}
export declare class ModifyReplicationTaskResponse extends SpeakeasyBase {
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
    modifyReplicationTaskResponse?: shared.ModifyReplicationTaskResponse;
    /**
     * ResourceAlreadyExistsFault
     */
    resourceAlreadyExistsFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
}
