import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteReplicationInstanceXAmzTargetEnum {
    AmazonDMSv20160101DeleteReplicationInstance = "AmazonDMSv20160101.DeleteReplicationInstance"
}
export declare class DeleteReplicationInstanceRequest extends SpeakeasyBase {
    deleteReplicationInstanceMessage: shared.DeleteReplicationInstanceMessage;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteReplicationInstanceXAmzTargetEnum;
}
export declare class DeleteReplicationInstanceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteReplicationInstanceResponse?: shared.DeleteReplicationInstanceResponse;
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
}
