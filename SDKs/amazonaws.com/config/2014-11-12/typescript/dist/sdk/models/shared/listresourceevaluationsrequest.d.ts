import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceEvaluationFilters } from "./resourceevaluationfilters";
export declare class ListResourceEvaluationsRequest extends SpeakeasyBase {
    filters?: ResourceEvaluationFilters;
    limit?: number;
    nextToken?: string;
}
