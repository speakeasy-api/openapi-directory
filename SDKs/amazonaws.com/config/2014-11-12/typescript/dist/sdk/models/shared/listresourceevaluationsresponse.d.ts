import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceEvaluation } from "./resourceevaluation";
/**
 * Success
 */
export declare class ListResourceEvaluationsResponse extends SpeakeasyBase {
    nextToken?: string;
    resourceEvaluations?: ResourceEvaluation[];
}
