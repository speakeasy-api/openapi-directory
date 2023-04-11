import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateRuleRequest extends SpeakeasyBase {
    /**
     * Your rule identifier
     */
    ruleId: string;
    /**
     * Your store identifier
     */
    storeId: string;
    updateRuleRequest: shared.UpdateRuleRequest;
}
export declare class UpdateRuleResponse extends SpeakeasyBase {
    /**
     * Filter does not exist or period on filter cannot be custom
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
