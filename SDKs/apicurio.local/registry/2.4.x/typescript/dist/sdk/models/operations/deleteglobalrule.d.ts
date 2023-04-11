import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteGlobalRuleRequest extends SpeakeasyBase {
    /**
     * The unique name/type of a rule.
     */
    rule: shared.RuleTypeEnum;
}
export declare class DeleteGlobalRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Common response for all operations that can return a `404` error.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
