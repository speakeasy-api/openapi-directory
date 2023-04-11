import { SpeakeasyBase } from "../../../internal/utils";
import { FileFormatStrategyEnum } from "./fileformatstrategyenum";
import { InputFileReadCsvConfiguration } from "./inputfilereadcsvconfiguration";
import { InputFileReadXmlConfiguration } from "./inputfilereadxmlconfiguration";
/**
 * Describe how to read the file. If FileFormatStrategy is CSV, csvFileReadProperties is required. Otherwise the xmlFileReadProperties is required.
 *
 * @remarks
 *
 */
export declare class InputFileReadConfiguration extends SpeakeasyBase {
    /**
     * The CSV file description
     */
    csvFileReadProperties?: InputFileReadCsvConfiguration;
    /**
     * The culture name of the file.  (i.e. fr-FR). If null then Invariant culture will be used.
     */
    cultureName?: string;
    /**
     * The encoding type. UTF-8 by default.
     */
    encodingTypeName?: string;
    /**
     * CSV or XML
     */
    format: FileFormatStrategyEnum;
    /**
     * The XML file description
     */
    xmlFileReadProperties?: InputFileReadXmlConfiguration;
}
