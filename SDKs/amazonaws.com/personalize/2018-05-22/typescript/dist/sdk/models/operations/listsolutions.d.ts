import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListSolutionsXAmzTargetEnum {
    AmazonPersonalizeListSolutions = "AmazonPersonalize.ListSolutions"
}
export declare class ListSolutionsRequest extends SpeakeasyBase {
    listSolutionsRequest: shared.ListSolutionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSolutionsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListSolutionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listSolutionsResponse?: shared.ListSolutionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
