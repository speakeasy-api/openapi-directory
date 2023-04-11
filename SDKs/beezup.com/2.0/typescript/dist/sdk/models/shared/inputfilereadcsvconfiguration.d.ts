import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The CSV file description
 */
export declare class InputFileReadCsvConfiguration extends SpeakeasyBase {
    /**
     * Indicate the separator of the values in the CSV file. Generally ";"
     */
    csvSeparator: string;
    /**
     * Indicate the text qualifier of the CSV file. Generally the value is "
     */
    csvTextQualifier?: string;
    /**
     * Indicate if the csv file contains the column name at the first row
     */
    hasHeaderRecord: boolean;
    /**
     * Indicate if the importation should not use the csv column name from the file
     */
    ignoreHeaderRecord: boolean;
}
