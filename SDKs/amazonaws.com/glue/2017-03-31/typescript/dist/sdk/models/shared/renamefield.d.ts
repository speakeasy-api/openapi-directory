import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a transform that renames a single data property key.
 */
export declare class RenameField extends SpeakeasyBase {
    inputs: string[];
    name: string;
    sourcePath: string[];
    targetPath: string[];
}
