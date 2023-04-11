import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetUserDefinedFunctionXAmzTargetEnum {
    AWSGlueGetUserDefinedFunction = "AWSGlue.GetUserDefinedFunction"
}
export declare class GetUserDefinedFunctionRequest extends SpeakeasyBase {
    getUserDefinedFunctionRequest: shared.GetUserDefinedFunctionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetUserDefinedFunctionXAmzTargetEnum;
}
export declare class GetUserDefinedFunctionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * Success
     */
    getUserDefinedFunctionResponse?: shared.GetUserDefinedFunctionResponse;
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
}
