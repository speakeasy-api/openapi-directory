import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The CSV file description
**/
export declare class InputFileReadCsvConfiguration extends SpeakeasyBase {
    csvSeparator: string;
    csvTextQualifier?: string;
    hasHeaderRecord: boolean;
    ignoreHeaderRecord: boolean;
}
