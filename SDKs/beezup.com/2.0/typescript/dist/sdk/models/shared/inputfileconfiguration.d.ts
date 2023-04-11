import { SpeakeasyBase } from "../../../internal/utils";
import { InputFileFetchConfiguration } from "./inputfilefetchconfiguration";
import { InputFileReadConfiguration } from "./inputfilereadconfiguration";
/**
 * Describe how to get and read a file
 */
export declare class InputFileConfiguration extends SpeakeasyBase {
    /**
     * Describe the way to download the file
     */
    fetch: InputFileFetchConfiguration;
    /**
     * The file number starting by 1
     */
    fileNumber: number;
    /**
     * Describe how to read the file. If FileFormatStrategy is CSV, csvFileReadProperties is required. Otherwise the xmlFileReadProperties is required.
     *
     * @remarks
     *
     */
    read: InputFileReadConfiguration;
}
