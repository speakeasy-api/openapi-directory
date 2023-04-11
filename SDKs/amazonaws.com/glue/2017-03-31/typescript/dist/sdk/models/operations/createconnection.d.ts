import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateConnectionXAmzTargetEnum {
    AWSGlueCreateConnection = "AWSGlue.CreateConnection"
}
export declare class CreateConnectionRequest extends SpeakeasyBase {
    createConnectionRequest: shared.CreateConnectionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateConnectionXAmzTargetEnum;
}
export declare class CreateConnectionResponse extends SpeakeasyBase {
    /**
     * AlreadyExistsException
     */
    alreadyExistsException?: any;
    contentType: string;
    /**
     * Success
     */
    createConnectionResponse?: Record<string, any>;
    /**
     * GlueEncryptionException
     */
    glueEncryptionException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    /**
     * ResourceNumberLimitExceededException
     */
    resourceNumberLimitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
