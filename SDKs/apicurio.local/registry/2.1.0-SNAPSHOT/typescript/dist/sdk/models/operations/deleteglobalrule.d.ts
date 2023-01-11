import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteGlobalRulePathParams extends SpeakeasyBase {
    rule: shared.RuleTypeEnum;
}
export declare class DeleteGlobalRuleRequest extends SpeakeasyBase {
    pathParams: DeleteGlobalRulePathParams;
}
export declare class DeleteGlobalRuleResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
