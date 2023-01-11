import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunRulePathParams extends SpeakeasyBase {
    ruleId: string;
    storeId: string;
}
export declare class RunRuleRequest extends SpeakeasyBase {
    pathParams: RunRulePathParams;
}
export declare class RunRuleResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
