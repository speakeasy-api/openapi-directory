import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetResolverRuleXAmzTargetEnum {
    Route53ResolverGetResolverRule = "Route53Resolver.GetResolverRule"
}
export declare class GetResolverRuleRequest extends SpeakeasyBase {
    getResolverRuleRequest: shared.GetResolverRuleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResolverRuleXAmzTargetEnum;
}
export declare class GetResolverRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getResolverRuleResponse?: shared.GetResolverRuleResponse;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
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
}
