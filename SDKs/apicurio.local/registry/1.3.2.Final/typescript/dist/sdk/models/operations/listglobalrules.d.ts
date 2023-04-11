import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListGlobalRulesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Common response for all operations that can fail with an unexpected server error.
     */
    error?: shared.ErrorT;
    /**
     * The list of names of the globally configured rules.
     */
    ruleTypes?: shared.RuleTypeEnum[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
