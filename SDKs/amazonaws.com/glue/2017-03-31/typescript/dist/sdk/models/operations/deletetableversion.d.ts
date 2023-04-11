import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteTableVersionXAmzTargetEnum {
    AWSGlueDeleteTableVersion = "AWSGlue.DeleteTableVersion"
}
export declare class DeleteTableVersionRequest extends SpeakeasyBase {
    deleteTableVersionRequest: shared.DeleteTableVersionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTableVersionXAmzTargetEnum;
}
export declare class DeleteTableVersionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteTableVersionResponse?: Record<string, any>;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
