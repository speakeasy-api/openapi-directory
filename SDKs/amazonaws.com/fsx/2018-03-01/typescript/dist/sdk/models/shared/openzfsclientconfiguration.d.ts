import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies who can mount an OpenZFS file system and the options available while mounting the file system.
 */
export declare class OpenZFSClientConfiguration extends SpeakeasyBase {
    clients: string;
    options: string[];
}
