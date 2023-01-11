import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MoveDownRulePathParams extends SpeakeasyBase {
    ruleId: string;
    storeId: string;
}
export declare class MoveDownRuleRequest extends SpeakeasyBase {
    pathParams: MoveDownRulePathParams;
}
export declare class MoveDownRuleResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
