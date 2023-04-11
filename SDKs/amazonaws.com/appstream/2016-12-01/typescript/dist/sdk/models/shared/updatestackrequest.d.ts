import { SpeakeasyBase } from "../../../internal/utils";
import { AccessEndpoint } from "./accessendpoint";
import { ApplicationSettings } from "./applicationsettings";
import { StackAttributeEnum } from "./stackattributeenum";
import { StorageConnector } from "./storageconnector";
import { StreamingExperienceSettings } from "./streamingexperiencesettings";
import { UserSetting } from "./usersetting";
export declare class UpdateStackRequest extends SpeakeasyBase {
    accessEndpoints?: AccessEndpoint[];
    applicationSettings?: ApplicationSettings;
    attributesToDelete?: StackAttributeEnum[];
    deleteStorageConnectors?: boolean;
    description?: string;
    displayName?: string;
    embedHostDomains?: string[];
    feedbackURL?: string;
    name: string;
    redirectURL?: string;
    storageConnectors?: StorageConnector[];
    streamingExperienceSettings?: StreamingExperienceSettings;
    userSettings?: UserSetting[];
}
