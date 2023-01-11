import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MoveUpRulePathParams extends SpeakeasyBase {
    ruleId: string;
    storeId: string;
}
export declare class MoveUpRuleRequest extends SpeakeasyBase {
    pathParams: MoveUpRulePathParams;
}
export declare class MoveUpRuleResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
