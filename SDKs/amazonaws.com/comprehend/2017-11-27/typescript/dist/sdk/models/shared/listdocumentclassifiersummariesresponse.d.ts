import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentClassifierSummary } from "./documentclassifiersummary";
/**
 * Success
 */
export declare class ListDocumentClassifierSummariesResponse extends SpeakeasyBase {
    documentClassifierSummariesList?: DocumentClassifierSummary[];
    nextToken?: string;
}
