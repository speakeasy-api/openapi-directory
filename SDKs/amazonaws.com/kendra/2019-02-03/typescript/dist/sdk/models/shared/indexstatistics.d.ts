import { SpeakeasyBase } from "../../../internal/utils";
import { FaqStatistics } from "./faqstatistics";
import { TextDocumentStatistics } from "./textdocumentstatistics";
/**
 * Provides information about the number of documents and the number of questions and answers in an index.
 */
export declare class IndexStatistics extends SpeakeasyBase {
    faqStatistics: FaqStatistics;
    textDocumentStatistics: TextDocumentStatistics;
}
