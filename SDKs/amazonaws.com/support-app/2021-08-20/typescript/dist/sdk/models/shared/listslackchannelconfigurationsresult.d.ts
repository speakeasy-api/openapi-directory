import { SpeakeasyBase } from "../../../internal/utils";
import { SlackChannelConfiguration } from "./slackchannelconfiguration";
/**
 * Success
 */
export declare class ListSlackChannelConfigurationsResult extends SpeakeasyBase {
    nextToken?: string;
    slackChannelConfigurations: SlackChannelConfiguration[];
}
