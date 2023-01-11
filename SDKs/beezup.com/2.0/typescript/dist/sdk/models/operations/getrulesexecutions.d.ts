import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRulesExecutionsPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class GetRulesExecutionsQueryParams extends SpeakeasyBase {
    pageNumber: number;
    pageSize: number;
}
export declare class GetRulesExecutionsRequest extends SpeakeasyBase {
    pathParams: GetRulesExecutionsPathParams;
    queryParams: GetRulesExecutionsQueryParams;
}
export declare class GetRulesExecutionsResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    ruleExecutionReportings?: shared.RuleExecutionReportings;
}
