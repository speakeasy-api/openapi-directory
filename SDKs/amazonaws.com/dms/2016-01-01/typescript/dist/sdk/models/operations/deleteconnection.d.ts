import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteConnectionXAmzTargetEnum {
    AmazonDMSv20160101DeleteConnection = "AmazonDMSv20160101.DeleteConnection"
}
export declare class DeleteConnectionRequest extends SpeakeasyBase {
    deleteConnectionMessage: shared.DeleteConnectionMessage;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteConnectionXAmzTargetEnum;
}
export declare class DeleteConnectionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedFault
     */
    accessDeniedFault?: any;
    contentType: string;
    /**
     * Success
     */
    deleteConnectionResponse?: shared.DeleteConnectionResponse;
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
