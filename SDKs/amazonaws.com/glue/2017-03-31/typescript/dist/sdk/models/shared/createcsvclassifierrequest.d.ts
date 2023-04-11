import { SpeakeasyBase } from "../../../internal/utils";
import { CsvHeaderOptionEnum } from "./csvheaderoptionenum";
/**
 * Specifies a custom CSV classifier for <code>CreateClassifier</code> to create.
 */
export declare class CreateCsvClassifierRequest extends SpeakeasyBase {
    allowSingleColumn?: boolean;
    containsHeader?: CsvHeaderOptionEnum;
    customDatatypeConfigured?: boolean;
    customDatatypes?: string[];
    delimiter?: string;
    disableValueTrimming?: boolean;
    header?: string[];
    name: string;
    quoteSymbol?: string;
}
