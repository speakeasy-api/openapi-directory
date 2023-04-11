import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Optional. The order for displaying results. Valid values: <code>Ascending</code> and <code>Descending</code>.
 */
export declare enum ListHumanLoopsSortOrderEnum {
    Ascending = "Ascending",
    Descending = "Descending"
}
export declare class ListHumanLoopsRequest extends SpeakeasyBase {
    /**
     * (Optional) The timestamp of the date when you want the human loops to begin in ISO 8601 format. For example, <code>2020-02-24</code>.
     */
    creationTimeAfter?: Date;
    /**
     * (Optional) The timestamp of the date before which you want the human loops to begin in ISO 8601 format. For example, <code>2020-02-24</code>.
     */
    creationTimeBefore?: Date;
    /**
     * The Amazon Resource Name (ARN) of a flow definition.
     */
    flowDefinitionArn: string;
    /**
     * The total number of items to return. If the total number of available items is more than the value specified in <code>MaxResults</code>, then a <code>NextToken</code> is returned in the output. You can use this token to display the next page of results.
     */
    maxResults?: number;
    /**
     * A token to display the next page of results.
     */
    nextToken?: string;
    /**
     * Optional. The order for displaying results. Valid values: <code>Ascending</code> and <code>Descending</code>.
     */
    sortOrder?: ListHumanLoopsSortOrderEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListHumanLoopsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listHumanLoopsResponse?: shared.ListHumanLoopsResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
