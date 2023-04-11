import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateArchiveRuleRequestBody extends SpeakeasyBase {
    /**
     * A client token.
     */
    clientToken?: string;
    /**
     * The criteria for the rule.
     */
    filter: Record<string, shared.Criterion>;
    /**
     * The name of the rule to create.
     */
    ruleName: string;
}
export declare class CreateArchiveRuleRequest extends SpeakeasyBase {
    requestBody: CreateArchiveRuleRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the created analyzer.
     */
    analyzerName: string;
}
export declare class CreateArchiveRuleResponse extends SpeakeasyBase {
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
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
