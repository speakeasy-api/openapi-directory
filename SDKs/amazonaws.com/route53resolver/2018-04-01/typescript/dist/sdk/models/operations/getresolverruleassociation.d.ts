import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetResolverRuleAssociationXAmzTargetEnum {
    Route53ResolverGetResolverRuleAssociation = "Route53Resolver.GetResolverRuleAssociation"
}
export declare class GetResolverRuleAssociationRequest extends SpeakeasyBase {
    getResolverRuleAssociationRequest: shared.GetResolverRuleAssociationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResolverRuleAssociationXAmzTargetEnum;
}
export declare class GetResolverRuleAssociationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getResolverRuleAssociationResponse?: shared.GetResolverRuleAssociationResponse;
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
