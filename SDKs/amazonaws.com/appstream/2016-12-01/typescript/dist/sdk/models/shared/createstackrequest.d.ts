import { SpeakeasyBase } from "../../../internal/utils";
import { AccessEndpoint } from "./accessendpoint";
import { ApplicationSettings } from "./applicationsettings";
import { StorageConnector } from "./storageconnector";
import { StreamingExperienceSettings } from "./streamingexperiencesettings";
import { UserSetting } from "./usersetting";
export declare class CreateStackRequest extends SpeakeasyBase {
    accessEndpoints?: AccessEndpoint[];
    applicationSettings?: ApplicationSettings;
    description?: string;
    displayName?: string;
    embedHostDomains?: string[];
    feedbackURL?: string;
    name: string;
    redirectURL?: string;
    storageConnectors?: StorageConnector[];
    streamingExperienceSettings?: StreamingExperienceSettings;
    tags?: Record<string, string>;
    userSettings?: UserSetting[];
}
