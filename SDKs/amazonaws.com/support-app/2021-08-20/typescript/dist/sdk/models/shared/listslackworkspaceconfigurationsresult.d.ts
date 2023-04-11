import { SpeakeasyBase } from "../../../internal/utils";
import { SlackWorkspaceConfiguration } from "./slackworkspaceconfiguration";
/**
 * Success
 */
export declare class ListSlackWorkspaceConfigurationsResult extends SpeakeasyBase {
    nextToken?: string;
    slackWorkspaceConfigurations?: SlackWorkspaceConfiguration[];
}
