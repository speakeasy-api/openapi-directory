import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateGlobalRuleConfigRequest extends SpeakeasyBase {
    rule1: shared.Rule;
    /**
     * The unique name/type of a rule.
     */
    rulePathParameter: shared.RuleTypeEnum;
}
export declare class UpdateGlobalRuleConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Common response for all operations that can return a `404` error.
     */
    error?: shared.ErrorT;
    /**
     * The global rule's configuration was successfully updated.
     */
    rule?: shared.Rule;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
