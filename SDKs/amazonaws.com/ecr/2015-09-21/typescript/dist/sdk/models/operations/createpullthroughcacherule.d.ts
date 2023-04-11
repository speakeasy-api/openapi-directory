import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreatePullThroughCacheRuleXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921CreatePullThroughCacheRule = "AmazonEC2ContainerRegistry_V20150921.CreatePullThroughCacheRule"
}
export declare class CreatePullThroughCacheRuleRequest extends SpeakeasyBase {
    createPullThroughCacheRuleRequest: shared.CreatePullThroughCacheRuleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePullThroughCacheRuleXAmzTargetEnum;
}
export declare class CreatePullThroughCacheRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createPullThroughCacheRuleResponse?: shared.CreatePullThroughCacheRuleResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * PullThroughCacheRuleAlreadyExistsException
     */
    pullThroughCacheRuleAlreadyExistsException?: any;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedUpstreamRegistryException
     */
    unsupportedUpstreamRegistryException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
