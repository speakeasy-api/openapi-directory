import { SpeakeasyBase } from "../../../internal/utils";
import { ComponentVersionListItem } from "./componentversionlistitem";
/**
 * Success
 */
export declare class ListComponentVersionsResponse extends SpeakeasyBase {
    componentVersions?: ComponentVersionListItem[];
    nextToken?: string;
}
