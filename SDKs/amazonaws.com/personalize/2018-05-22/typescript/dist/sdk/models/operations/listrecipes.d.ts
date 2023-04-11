import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListRecipesXAmzTargetEnum {
    AmazonPersonalizeListRecipes = "AmazonPersonalize.ListRecipes"
}
export declare class ListRecipesRequest extends SpeakeasyBase {
    listRecipesRequest: shared.ListRecipesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRecipesXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListRecipesResponse extends SpeakeasyBase {
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
    listRecipesResponse?: shared.ListRecipesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
