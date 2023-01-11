import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGlobalRuleConfigPathParams extends SpeakeasyBase {
    rule: shared.RuleTypeEnum;
}
export declare class GetGlobalRuleConfigRequest extends SpeakeasyBase {
    pathParams: GetGlobalRuleConfigPathParams;
}
export declare class GetGlobalRuleConfigResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    rule?: shared.Rule;
    statusCode: number;
}
