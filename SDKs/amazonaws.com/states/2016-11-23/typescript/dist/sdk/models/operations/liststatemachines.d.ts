import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListStateMachinesXAmzTargetEnum {
    AWSStepFunctionsListStateMachines = "AWSStepFunctions.ListStateMachines"
}
export declare class ListStateMachinesRequest extends SpeakeasyBase {
    listStateMachinesInput: shared.ListStateMachinesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListStateMachinesXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListStateMachinesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidToken
     */
    invalidToken?: any;
    /**
     * Success
     */
    listStateMachinesOutput?: shared.ListStateMachinesOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
