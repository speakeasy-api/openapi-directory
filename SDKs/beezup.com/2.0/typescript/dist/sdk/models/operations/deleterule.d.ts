import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRulePathParams extends SpeakeasyBase {
    ruleId: string;
    storeId: string;
}
export declare class DeleteRuleRequest extends SpeakeasyBase {
    pathParams: DeleteRulePathParams;
}
export declare class DeleteRuleResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
