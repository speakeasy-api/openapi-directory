import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRulesExecutionsRequest extends SpeakeasyBase {
    /**
     * The page to retrieve
     */
    pageNumber: number;
    /**
     * The count of rule history to retrieve
     */
    pageSize: number;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class GetRulesExecutionsResponse extends SpeakeasyBase {
    /**
     * Invalid request
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Rules executions list
     */
    ruleExecutionReportings?: shared.RuleExecutionReportings;
}
