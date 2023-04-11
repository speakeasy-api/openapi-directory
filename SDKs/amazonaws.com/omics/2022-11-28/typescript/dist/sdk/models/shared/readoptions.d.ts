import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Read options for an annotation import job.
 */
export declare class ReadOptions extends SpeakeasyBase {
    comment?: string;
    encoding?: string;
    escape?: string;
    escapeQuotes?: boolean;
    header?: boolean;
    lineSep?: string;
    quote?: string;
    quoteAll?: boolean;
    sep?: string;
}
