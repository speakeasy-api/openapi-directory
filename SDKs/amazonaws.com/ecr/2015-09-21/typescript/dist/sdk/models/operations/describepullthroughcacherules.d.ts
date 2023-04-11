import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribePullThroughCacheRulesXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921DescribePullThroughCacheRules = "AmazonEC2ContainerRegistry_V20150921.DescribePullThroughCacheRules"
}
export declare class DescribePullThroughCacheRulesRequest extends SpeakeasyBase {
    describePullThroughCacheRulesRequest: shared.DescribePullThroughCacheRulesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePullThroughCacheRulesXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class DescribePullThroughCacheRulesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describePullThroughCacheRulesResponse?: shared.DescribePullThroughCacheRulesResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * PullThroughCacheRuleNotFoundException
     */
    pullThroughCacheRuleNotFoundException?: any;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
