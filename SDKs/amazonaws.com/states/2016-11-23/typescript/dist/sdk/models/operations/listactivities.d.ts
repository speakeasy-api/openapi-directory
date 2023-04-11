import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListActivitiesXAmzTargetEnum {
    AWSStepFunctionsListActivities = "AWSStepFunctions.ListActivities"
}
export declare class ListActivitiesRequest extends SpeakeasyBase {
    listActivitiesInput: shared.ListActivitiesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListActivitiesXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListActivitiesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidToken
     */
    invalidToken?: any;
    /**
     * Success
     */
    listActivitiesOutput?: shared.ListActivitiesOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
