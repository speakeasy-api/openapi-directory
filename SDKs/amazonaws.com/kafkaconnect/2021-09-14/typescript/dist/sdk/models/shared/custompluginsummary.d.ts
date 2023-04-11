import { SpeakeasyBase } from "../../../internal/utils";
import { CustomPluginRevisionSummary } from "./custompluginrevisionsummary";
import { CustomPluginStateEnum } from "./custompluginstateenum";
/**
 * A summary of the custom plugin.
 */
export declare class CustomPluginSummary extends SpeakeasyBase {
    creationTime?: Date;
    customPluginArn?: string;
    customPluginState?: CustomPluginStateEnum;
    description?: string;
    latestRevision?: CustomPluginRevisionSummary;
    name?: string;
}
