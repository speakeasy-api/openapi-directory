import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MoveUpRuleRequest extends SpeakeasyBase {
    /**
     * Your rule identifier
     */
    ruleId: string;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class MoveUpRuleResponse extends SpeakeasyBase {
    /**
     * Priority can only be changed when more than one rule is defined
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
