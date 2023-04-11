import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A delimited data format where the column separator can be a comma and the record separator is a newline character.
 */
export declare class CsvConfiguration extends SpeakeasyBase {
    columnSeparator?: string;
    escapeChar?: string;
    nullValue?: string;
    quoteChar?: string;
    trimWhiteSpace?: boolean;
}
