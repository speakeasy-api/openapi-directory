import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeletePullThroughCacheRuleXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921DeletePullThroughCacheRule = "AmazonEC2ContainerRegistry_V20150921.DeletePullThroughCacheRule"
}
export declare class DeletePullThroughCacheRuleRequest extends SpeakeasyBase {
    deletePullThroughCacheRuleRequest: shared.DeletePullThroughCacheRuleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePullThroughCacheRuleXAmzTargetEnum;
}
export declare class DeletePullThroughCacheRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deletePullThroughCacheRuleResponse?: shared.DeletePullThroughCacheRuleResponse;
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
