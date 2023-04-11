import { SpeakeasyBase } from "../../../internal/utils";
import { ExtensionVersionDetails } from "./extensionversiondetails";
/**
 * Success
 */
export declare class ListExtensionVersionsResult extends SpeakeasyBase {
    extensionVersions?: ExtensionVersionDetails[];
    nextToken?: string;
}
