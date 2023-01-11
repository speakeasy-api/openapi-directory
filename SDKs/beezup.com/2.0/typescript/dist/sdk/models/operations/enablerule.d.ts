import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnableRulePathParams extends SpeakeasyBase {
    ruleId: string;
    storeId: string;
}
export declare class EnableRuleRequest extends SpeakeasyBase {
    pathParams: EnableRulePathParams;
}
export declare class EnableRuleResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
