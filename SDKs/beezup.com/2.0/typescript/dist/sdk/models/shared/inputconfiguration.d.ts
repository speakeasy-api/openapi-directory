import { SpeakeasyBase } from "../../../internal/utils";
import { InputFileConfiguration } from "./inputfileconfiguration";
/**
 * Describe the input configuration
 */
export declare class InputConfiguration extends SpeakeasyBase {
    /**
     * The list of files to get and read
     */
    files: InputFileConfiguration[];
    /**
     * Can be null. Use to transform multiple files with an XSLT file.
     */
    transformFileUrl?: string;
}
