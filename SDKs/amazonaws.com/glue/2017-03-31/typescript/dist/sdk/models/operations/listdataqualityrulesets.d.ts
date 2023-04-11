import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDataQualityRulesetsXAmzTargetEnum {
    AWSGlueListDataQualityRulesets = "AWSGlue.ListDataQualityRulesets"
}
export declare class ListDataQualityRulesetsRequest extends SpeakeasyBase {
    listDataQualityRulesetsRequest: shared.ListDataQualityRulesetsRequest;
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
    xAmzTarget: ListDataQualityRulesetsXAmzTargetEnum;
}
export declare class ListDataQualityRulesetsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * Success
     */
    listDataQualityRulesetsResponse?: shared.ListDataQualityRulesetsResponse;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
