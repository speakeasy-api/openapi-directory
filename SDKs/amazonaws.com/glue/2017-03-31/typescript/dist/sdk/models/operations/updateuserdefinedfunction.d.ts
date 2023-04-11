import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateUserDefinedFunctionXAmzTargetEnum {
    AWSGlueUpdateUserDefinedFunction = "AWSGlue.UpdateUserDefinedFunction"
}
export declare class UpdateUserDefinedFunctionRequest extends SpeakeasyBase {
    updateUserDefinedFunctionRequest: shared.UpdateUserDefinedFunctionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateUserDefinedFunctionXAmzTargetEnum;
}
export declare class UpdateUserDefinedFunctionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * GlueEncryptionException
     */
    glueEncryptionException?: any;
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
    /**
     * Success
     */
    updateUserDefinedFunctionResponse?: Record<string, any>;
}
