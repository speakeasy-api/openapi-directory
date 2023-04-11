import { SpeakeasyBase } from "../../../internal/utils";
import { PluginHealthEnum } from "./pluginhealthenum";
/**
 * The summary of the Migration Hub Orchestrator plugin.
 */
export declare class PluginSummary extends SpeakeasyBase {
    hostname?: string;
    ipAddress?: string;
    pluginId?: string;
    registeredTime?: string;
    status?: PluginHealthEnum;
    version?: string;
}
