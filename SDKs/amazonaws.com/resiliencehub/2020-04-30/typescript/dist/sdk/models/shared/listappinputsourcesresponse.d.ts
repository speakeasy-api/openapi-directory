import { SpeakeasyBase } from "../../../internal/utils";
import { AppInputSource } from "./appinputsource";
/**
 * Success
 */
export declare class ListAppInputSourcesResponse extends SpeakeasyBase {
    appInputSources: AppInputSource[];
    nextToken?: string;
}
