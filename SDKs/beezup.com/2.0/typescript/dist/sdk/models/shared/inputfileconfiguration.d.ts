import { SpeakeasyBase } from "../../../internal/utils";
import { InputFileFetchConfiguration } from "./inputfilefetchconfiguration";
import { InputFileReadConfiguration } from "./inputfilereadconfiguration";
/**
 * Describe how to get and read a file
**/
export declare class InputFileConfiguration extends SpeakeasyBase {
    fetch: InputFileFetchConfiguration;
    fileNumber: number;
    read: InputFileReadConfiguration;
}
