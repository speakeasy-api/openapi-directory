import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ApplyArchiveRuleRequestBody extends SpeakeasyBase {
    /**
     * The Amazon resource name (ARN) of the analyzer.
     */
    analyzerArn: string;
    /**
     * A client token.
     */
    clientToken?: string;
    /**
     * The name of the rule to apply.
     */
    ruleName: string;
}
export declare class ApplyArchiveRuleRequest extends SpeakeasyBase {
    requestBody: ApplyArchiveRuleRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ApplyArchiveRuleResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
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
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
