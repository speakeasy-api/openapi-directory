import { SpeakeasyBase } from "../../../internal/utils";
import { ExtensionDetails } from "./extensiondetails";
/**
 * Success
 */
export declare class ListExtensionsResult extends SpeakeasyBase {
    extensions?: ExtensionDetails[];
    nextToken?: string;
}
