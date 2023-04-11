import { SpeakeasyBase } from "../../../internal/utils";
import { CustomPluginSummary } from "./custompluginsummary";
/**
 * Success
 */
export declare class ListCustomPluginsResponse extends SpeakeasyBase {
    customPlugins?: CustomPluginSummary[];
    nextToken?: string;
}
