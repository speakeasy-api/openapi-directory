import { SpeakeasyBase } from "../../../internal/utils";
import { CommonModelsCoreSetting } from "./commonmodelscoresetting";
import { CommonModelsCoreSystem } from "./commonmodelscoresystem";
import { CommonModelsDestiny2CoreSettings } from "./commonmodelsdestiny2coresettings";
import { UserEmailSettings } from "./useremailsettings";
export declare class CommonModelsCoreSettingsConfiguration extends SpeakeasyBase {
    clanBannerDecalColors?: CommonModelsCoreSetting[];
    clanBannerDecals?: CommonModelsCoreSetting[];
    clanBannerGonfalonColors?: CommonModelsCoreSetting[];
    clanBannerGonfalonDetailColors?: CommonModelsCoreSetting[];
    clanBannerGonfalonDetails?: CommonModelsCoreSetting[];
    clanBannerGonfalons?: CommonModelsCoreSetting[];
    clanBannerStandards?: CommonModelsCoreSetting[];
    defaultGroupTheme?: CommonModelsCoreSetting;
    destiny2CoreSettings?: CommonModelsDestiny2CoreSettings;
    destinyMembershipTypes?: CommonModelsCoreSetting[];
    /**
     * The set of all email subscription/opt-in settings and definitions.
     */
    emailSettings?: UserEmailSettings;
    environment?: string;
    fireteamActivities?: CommonModelsCoreSetting[];
    forumCategories?: CommonModelsCoreSetting[];
    groupAvatars?: CommonModelsCoreSetting[];
    ignoreReasons?: CommonModelsCoreSetting[];
    recruitmentActivities?: CommonModelsCoreSetting[];
    recruitmentMiscTags?: CommonModelsCoreSetting[];
    recruitmentPlatformTags?: CommonModelsCoreSetting[];
    systemContentLocales?: CommonModelsCoreSetting[];
    systems?: Record<string, CommonModelsCoreSystem>;
    userContentLocales?: CommonModelsCoreSetting[];
}
