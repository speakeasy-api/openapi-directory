import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DisassociatePricingRulesRequestBody extends SpeakeasyBase {
    /**
     *  The pricing plan Amazon Resource Name (ARN) to disassociate pricing rules from.
     */
    arn: string;
    /**
     *  A list containing the Amazon Resource Name (ARN) of the pricing rules that will be disassociated.
     */
    pricingRuleArns: string[];
}
export declare class DisassociatePricingRulesRequest extends SpeakeasyBase {
    requestBody: DisassociatePricingRulesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisassociatePricingRulesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    disassociatePricingRulesOutput?: shared.DisassociatePricingRulesOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
    /**
     * ValidationException
     */
    validationException?: any;
}
