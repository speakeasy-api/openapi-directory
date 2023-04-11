import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnableRuleRequest extends SpeakeasyBase {
    /**
     * Your rule identifier
     */
    ruleId: string;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class EnableRuleResponse extends SpeakeasyBase {
    /**
     * Rule not found
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
