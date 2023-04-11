import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteResolverRuleXAmzTargetEnum {
    Route53ResolverDeleteResolverRule = "Route53Resolver.DeleteResolverRule"
}
export declare class DeleteResolverRuleRequest extends SpeakeasyBase {
    deleteResolverRuleRequest: shared.DeleteResolverRuleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteResolverRuleXAmzTargetEnum;
}
export declare class DeleteResolverRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteResolverRuleResponse?: shared.DeleteResolverRuleResponse;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
