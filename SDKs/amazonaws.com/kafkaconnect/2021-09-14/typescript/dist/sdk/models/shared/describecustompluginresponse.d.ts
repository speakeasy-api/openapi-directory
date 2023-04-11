import { SpeakeasyBase } from "../../../internal/utils";
import { CustomPluginRevisionSummary } from "./custompluginrevisionsummary";
import { CustomPluginStateEnum } from "./custompluginstateenum";
import { StateDescription } from "./statedescription";
/**
 * Success
 */
export declare class DescribeCustomPluginResponse extends SpeakeasyBase {
    creationTime?: Date;
    customPluginArn?: string;
    customPluginState?: CustomPluginStateEnum;
    description?: string;
    latestRevision?: CustomPluginRevisionSummary;
    name?: string;
    stateDescription?: StateDescription;
}
