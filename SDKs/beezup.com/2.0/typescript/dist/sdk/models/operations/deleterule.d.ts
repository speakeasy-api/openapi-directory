import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteRuleRequest extends SpeakeasyBase {
    /**
     * Your rule identifier
     */
    ruleId: string;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class DeleteRuleResponse extends SpeakeasyBase {
    /**
     * Rule not found
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
