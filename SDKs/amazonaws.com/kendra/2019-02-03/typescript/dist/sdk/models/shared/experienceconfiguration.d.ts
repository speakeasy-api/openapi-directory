import { SpeakeasyBase } from "../../../internal/utils";
import { ContentSourceConfiguration } from "./contentsourceconfiguration";
import { UserIdentityConfiguration } from "./useridentityconfiguration";
/**
 * Provides the configuration information for your Amazon Kendra experience. This includes the data source IDs and/or FAQ IDs, and user or group information to grant access to your Amazon Kendra experience.
 */
export declare class ExperienceConfiguration extends SpeakeasyBase {
    contentSourceConfiguration?: ContentSourceConfiguration;
    userIdentityConfiguration?: UserIdentityConfiguration;
}
