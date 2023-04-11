import { SpeakeasyBase } from "../../../internal/utils";
import { FaqSummary } from "./faqsummary";
/**
 * Success
 */
export declare class ListFaqsResponse extends SpeakeasyBase {
    faqSummaryItems?: FaqSummary[];
    nextToken?: string;
}
