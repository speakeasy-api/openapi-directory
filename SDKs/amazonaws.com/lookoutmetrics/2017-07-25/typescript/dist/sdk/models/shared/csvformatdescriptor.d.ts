import { SpeakeasyBase } from "../../../internal/utils";
import { CSVFileCompressionEnum } from "./csvfilecompressionenum";
/**
 * Contains information about how a source CSV data file should be analyzed.
 */
export declare class CsvFormatDescriptor extends SpeakeasyBase {
    charset?: string;
    containsHeader?: boolean;
    delimiter?: string;
    fileCompression?: CSVFileCompressionEnum;
    headerList?: string[];
    quoteSymbol?: string;
}
