import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The unique name/type of a rule.
 */
export declare enum GetGlobalRuleConfigRuleEnum {
    Validity = "VALIDITY",
    Compatibility = "COMPATIBILITY"
}
export declare class GetGlobalRuleConfigRequest extends SpeakeasyBase {
    /**
     * The unique name/type of a rule.
     */
    rule: GetGlobalRuleConfigRuleEnum;
}
export declare class GetGlobalRuleConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Common response for all operations that can return a `404` error.
     */
    error?: shared.ErrorT;
    /**
     * The global rule's configuration.
     */
    rule?: shared.Rule;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
