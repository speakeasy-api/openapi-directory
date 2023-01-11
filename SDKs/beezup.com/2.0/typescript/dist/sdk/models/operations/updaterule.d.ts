import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateRulePathParams extends SpeakeasyBase {
    ruleId: string;
    storeId: string;
}
export declare class UpdateRuleRequest extends SpeakeasyBase {
    pathParams: UpdateRulePathParams;
    request: shared.UpdateRuleRequest;
}
export declare class UpdateRuleResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
