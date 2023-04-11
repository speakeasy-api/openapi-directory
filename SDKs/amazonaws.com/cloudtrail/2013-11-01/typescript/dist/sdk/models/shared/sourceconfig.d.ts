import { SpeakeasyBase } from "../../../internal/utils";
import { AdvancedEventSelector } from "./advancedeventselector";
/**
 *  Contains configuration information about the channel.
 */
export declare class SourceConfig extends SpeakeasyBase {
    advancedEventSelectors?: AdvancedEventSelector[];
    applyToAllRegions?: boolean;
}
