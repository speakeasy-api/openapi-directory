import { SpeakeasyBase } from "../../../internal/utils";
import { InputFileReadCsvConfiguration } from "./inputfilereadcsvconfiguration";
import { FileFormatStrategyEnum } from "./fileformatstrategyenum";
import { InputFileReadXmlConfiguration } from "./inputfilereadxmlconfiguration";
/**
 * Describe how to read the file. If FileFormatStrategy is CSV, csvFileReadProperties is required. Otherwise the xmlFileReadProperties is required.
 *
**/
export declare class InputFileReadConfiguration extends SpeakeasyBase {
    csvFileReadProperties?: InputFileReadCsvConfiguration;
    cultureName?: string;
    encodingTypeName?: string;
    format: FileFormatStrategyEnum;
    xmlFileReadProperties?: InputFileReadXmlConfiguration;
}
