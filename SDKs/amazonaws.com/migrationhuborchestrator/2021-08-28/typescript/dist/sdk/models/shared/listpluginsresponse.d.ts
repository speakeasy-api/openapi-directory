import { SpeakeasyBase } from "../../../internal/utils";
import { PluginSummary } from "./pluginsummary";
/**
 * Success
 */
export declare class ListPluginsResponse extends SpeakeasyBase {
    nextToken?: string;
    plugins?: PluginSummary[];
}
