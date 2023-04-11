import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateScriptXAmzTargetEnum {
    AWSGlueCreateScript = "AWSGlue.CreateScript"
}
export declare class CreateScriptRequest extends SpeakeasyBase {
    createScriptRequest: shared.CreateScriptRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateScriptXAmzTargetEnum;
}
export declare class CreateScriptResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createScriptResponse?: shared.CreateScriptResponse;
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
