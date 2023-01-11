import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateGlobalRuleConfigPathParams extends SpeakeasyBase {
    rule: shared.RuleTypeEnum;
}
export declare class UpdateGlobalRuleConfigRequest extends SpeakeasyBase {
    pathParams: UpdateGlobalRuleConfigPathParams;
    request: shared.Rule;
}
export declare class UpdateGlobalRuleConfigResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    rule?: shared.Rule;
    statusCode: number;
}
