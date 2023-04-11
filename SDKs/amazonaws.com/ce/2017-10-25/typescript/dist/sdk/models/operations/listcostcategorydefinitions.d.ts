import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListCostCategoryDefinitionsXAmzTargetEnum {
    AWSInsightsIndexServiceListCostCategoryDefinitions = "AWSInsightsIndexService.ListCostCategoryDefinitions"
}
export declare class ListCostCategoryDefinitionsRequest extends SpeakeasyBase {
    listCostCategoryDefinitionsRequest: shared.ListCostCategoryDefinitionsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListCostCategoryDefinitionsXAmzTargetEnum;
}
export declare class ListCostCategoryDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * Success
     */
    listCostCategoryDefinitionsResponse?: shared.ListCostCategoryDefinitionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
