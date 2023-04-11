import { SpeakeasyBase } from "../../../internal/utils";
import { AccessEndpoint } from "./accessendpoint";
import { ApplicationSettingsResponse } from "./applicationsettingsresponse";
import { StackError } from "./stackerror";
import { StorageConnector } from "./storageconnector";
import { StreamingExperienceSettings } from "./streamingexperiencesettings";
import { UserSetting } from "./usersetting";
/**
 * Describes a stack.
 */
export declare class Stack extends SpeakeasyBase {
    accessEndpoints?: AccessEndpoint[];
    applicationSettings?: ApplicationSettingsResponse;
    arn?: string;
    createdTime?: Date;
    description?: string;
    displayName?: string;
    embedHostDomains?: string[];
    feedbackURL?: string;
    name: string;
    redirectURL?: string;
    stackErrors?: StackError[];
    storageConnectors?: StorageConnector[];
    streamingExperienceSettings?: StreamingExperienceSettings;
    userSettings?: UserSetting[];
}
