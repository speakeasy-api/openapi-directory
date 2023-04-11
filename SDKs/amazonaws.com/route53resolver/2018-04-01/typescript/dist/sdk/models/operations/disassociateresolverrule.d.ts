import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateResolverRuleXAmzTargetEnum {
    Route53ResolverDisassociateResolverRule = "Route53Resolver.DisassociateResolverRule"
}
export declare class DisassociateResolverRuleRequest extends SpeakeasyBase {
    disassociateResolverRuleRequest: shared.DisassociateResolverRuleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateResolverRuleXAmzTargetEnum;
}
export declare class DisassociateResolverRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disassociateResolverRuleResponse?: shared.DisassociateResolverRuleResponse;
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
