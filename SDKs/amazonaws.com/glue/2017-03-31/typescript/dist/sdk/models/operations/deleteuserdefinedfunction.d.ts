import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteUserDefinedFunctionXAmzTargetEnum {
    AWSGlueDeleteUserDefinedFunction = "AWSGlue.DeleteUserDefinedFunction"
}
export declare class DeleteUserDefinedFunctionRequest extends SpeakeasyBase {
    deleteUserDefinedFunctionRequest: shared.DeleteUserDefinedFunctionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteUserDefinedFunctionXAmzTargetEnum;
}
export declare class DeleteUserDefinedFunctionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteUserDefinedFunctionResponse?: Record<string, any>;
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
