import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRulesPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class GetRulesRequest extends SpeakeasyBase {
    pathParams: GetRulesPathParams;
}
export declare class GetRulesResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    ruleList?: shared.RuleList;
}
