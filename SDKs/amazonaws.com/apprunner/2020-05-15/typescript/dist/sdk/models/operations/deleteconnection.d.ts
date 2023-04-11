import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteConnectionXAmzTargetEnum {
    AppRunnerDeleteConnection = "AppRunner.DeleteConnection"
}
export declare class DeleteConnectionRequest extends SpeakeasyBase {
    deleteConnectionRequest: shared.DeleteConnectionRequest;
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
    contentType: string;
    /**
     * Success
     */
    deleteConnectionResponse?: shared.DeleteConnectionResponse;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
