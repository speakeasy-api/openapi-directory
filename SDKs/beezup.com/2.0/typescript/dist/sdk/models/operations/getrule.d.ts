import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRuleRequest extends SpeakeasyBase {
    /**
     * Your rule identifier
     */
    ruleId: string;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class GetRuleResponse extends SpeakeasyBase {
    /**
     * Store or resource not found
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Get Rule
     */
    rule?: shared.Rule;
}
