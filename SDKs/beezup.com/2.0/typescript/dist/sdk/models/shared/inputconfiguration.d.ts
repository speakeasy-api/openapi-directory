import { SpeakeasyBase } from "../../../internal/utils";
import { InputFileConfiguration } from "./inputfileconfiguration";
/**
 * Describe the input configuration
**/
export declare class InputConfiguration extends SpeakeasyBase {
    files: InputFileConfiguration[];
    transformFileUrl?: string;
}
