import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisableRulePathParams extends SpeakeasyBase {
    ruleId: string;
    storeId: string;
}
export declare class DisableRuleRequest extends SpeakeasyBase {
    pathParams: DisableRulePathParams;
}
export declare class DisableRuleResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
