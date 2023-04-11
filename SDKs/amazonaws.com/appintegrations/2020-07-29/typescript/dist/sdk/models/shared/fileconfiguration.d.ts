import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration for what files should be pulled from the source.
 */
export declare class FileConfiguration extends SpeakeasyBase {
    filters?: Record<string, string[]>;
    folders: string[];
}
