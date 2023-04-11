import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyConfigGearAssetDataBaseDefinition } from "./destinyconfiggearassetdatabasedefinition";
import { DestinyConfigImagePyramidEntry } from "./destinyconfigimagepyramidentry";
/**
 * DestinyManifest is the external-facing contract for just the properties needed by those calling the Destiny Platform.
 */
export declare class DestinyConfigDestinyManifest extends SpeakeasyBase {
    /**
     * Information about the "Image Pyramid" for Destiny icons. Where possible, we create smaller versions of Destiny icons. These are found as subfolders under the location of the "original/full size" Destiny images, with the same file name and extension as the original image itself. (this lets us avoid sending largely redundant path info with every entity, at the expense of the smaller versions of the image being less discoverable)
     */
    iconImagePyramidInfo?: DestinyConfigImagePyramidEntry[];
    /**
     * This points to the generated JSON that contains all the Definitions. Each key is a locale. The value is a dictionary, where the key is a definition type by name, and the value is the path to the file for that definition. WARNING: This is unsafe and subject to change - do not depend on data in these files staying around long-term.
     */
    jsonWorldComponentContentPaths?: Record<string, Record<string, string>>;
    /**
     * This points to the generated JSON that contains all the Definitions. Each key is a locale. The value is a path to the aggregated world definitions (warning: large file!)
     */
    jsonWorldContentPaths?: Record<string, string>;
    mobileAssetContentPath?: string;
    mobileClanBannerDatabasePath?: string;
    mobileGearAssetDataBases?: DestinyConfigGearAssetDataBaseDefinition[];
    mobileGearCDN?: Record<string, string>;
    mobileWorldContentPaths?: Record<string, string>;
    version?: string;
}
