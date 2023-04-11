import { SpeakeasyBase } from "../../../internal/utils";
import { ClassificationScopeSummary } from "./classificationscopesummary";
/**
 * Success
 */
export declare class ListClassificationScopesResponse extends SpeakeasyBase {
    classificationScopes?: ClassificationScopeSummary[];
    nextToken?: string;
}
