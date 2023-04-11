import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateArchiveRuleRequestBody extends SpeakeasyBase {
    /**
     * A client token.
     */
    clientToken?: string;
    /**
     * A filter to match for the rules to update. Only rules that match the filter are updated.
     */
    filter: Record<string, shared.Criterion>;
}
export declare class UpdateArchiveRuleRequest extends SpeakeasyBase {
    requestBody: UpdateArchiveRuleRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the analyzer to update the archive rules for.
     */
    analyzerName: string;
    /**
     * The name of the rule to update.
     */
    ruleName: string;
}
export declare class UpdateArchiveRuleResponse extends SpeakeasyBase {
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
