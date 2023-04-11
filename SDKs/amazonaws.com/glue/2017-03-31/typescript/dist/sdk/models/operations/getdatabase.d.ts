import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDatabaseXAmzTargetEnum {
    AWSGlueGetDatabase = "AWSGlue.GetDatabase"
}
export declare class GetDatabaseRequest extends SpeakeasyBase {
    getDatabaseRequest: shared.GetDatabaseRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDatabaseXAmzTargetEnum;
}
export declare class GetDatabaseResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * Success
     */
    getDatabaseResponse?: shared.GetDatabaseResponse;
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
