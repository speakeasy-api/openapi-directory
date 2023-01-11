import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRulePathParams extends SpeakeasyBase {
    ruleId: string;
    storeId: string;
}
export declare class GetRuleRequest extends SpeakeasyBase {
    pathParams: GetRulePathParams;
}
export declare class GetRuleResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rule?: shared.Rule;
}
