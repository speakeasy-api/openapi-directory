import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListExecutionsXAmzTargetEnum {
    AWSStepFunctionsListExecutions = "AWSStepFunctions.ListExecutions"
}
export declare class ListExecutionsRequest extends SpeakeasyBase {
    listExecutionsInput: shared.ListExecutionsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListExecutionsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidArn
     */
    invalidArn?: any;
    /**
     * InvalidToken
     */
    invalidToken?: any;
    /**
     * Success
     */
    listExecutionsOutput?: shared.ListExecutionsOutput;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * StateMachineDoesNotExist
     */
    stateMachineDoesNotExist?: any;
    /**
     * StateMachineTypeNotSupported
     */
    stateMachineTypeNotSupported?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
