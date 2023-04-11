import { SpeakeasyBase } from "../../../internal/utils";
import { LabelSummary } from "./labelsummary";
/**
 * Success
 */
export declare class ListLabelsResponse extends SpeakeasyBase {
    labelSummaries?: LabelSummary[];
    nextToken?: string;
}
