import { SpeakeasyBase } from "../../../internal/utils";
import { AddonInfo } from "./addoninfo";
/**
 * Success
 */
export declare class DescribeAddonVersionsResponse extends SpeakeasyBase {
    addons?: AddonInfo[];
    nextToken?: string;
}
