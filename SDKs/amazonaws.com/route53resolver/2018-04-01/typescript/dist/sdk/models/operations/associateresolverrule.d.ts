import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateResolverRuleXAmzTargetEnum {
    Route53ResolverAssociateResolverRule = "Route53Resolver.AssociateResolverRule"
}
export declare class AssociateResolverRuleRequest extends SpeakeasyBase {
    associateResolverRuleRequest: shared.AssociateResolverRuleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateResolverRuleXAmzTargetEnum;
}
export declare class AssociateResolverRuleResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateResolverRuleResponse?: shared.AssociateResolverRuleResponse;
    contentType: string;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceExistsException
     */
    resourceExistsException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ResourceUnavailableException
     */
    resourceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
