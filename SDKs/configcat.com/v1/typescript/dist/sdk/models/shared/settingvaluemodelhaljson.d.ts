import { SpeakeasyBase } from "../../../internal/utils";
import { IntegrationLinkTypeEnum } from "./integrationlinktypeenum";
import { RolloutPercentageItemModel } from "./rolloutpercentageitemmodel";
import { RolloutRuleModel } from "./rolloutrulemodel";
import { SettingTypeEnum } from "./settingtypeenum";
export declare class SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganizationLinks extends SpeakeasyBase {
    members?: string;
    products?: string;
}
export declare class SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganization extends SpeakeasyBase {
    links?: SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganizationLinks;
    name?: string;
    organizationId?: string;
}
export declare class SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbedded extends SpeakeasyBase {
    organization?: SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganization;
}
export declare class SettingValueModelHaljsonEmbeddedConfigEmbeddedProductLinks extends SpeakeasyBase {
    configs?: string;
    environments?: string;
    members?: string;
    permissionGroups?: string;
    segments?: string;
    self?: string;
    tags?: string;
}
export declare class SettingValueModelHaljsonEmbeddedConfigEmbeddedProduct extends SpeakeasyBase {
    embedded?: SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbedded;
    links?: SettingValueModelHaljsonEmbeddedConfigEmbeddedProductLinks;
    description?: string;
    name?: string;
    order?: number;
    productId?: string;
    reasonRequired?: boolean;
}
export declare class SettingValueModelHaljsonEmbeddedConfigEmbedded extends SpeakeasyBase {
    product?: SettingValueModelHaljsonEmbeddedConfigEmbeddedProduct;
}
export declare class SettingValueModelHaljsonEmbeddedConfigLinks extends SpeakeasyBase {
    self?: string;
    settings?: string;
}
export declare class SettingValueModelHaljsonEmbeddedConfig extends SpeakeasyBase {
    embedded?: SettingValueModelHaljsonEmbeddedConfigEmbedded;
    links?: SettingValueModelHaljsonEmbeddedConfigLinks;
    configId?: string;
    description?: string;
    name?: string;
    order?: number;
}
export declare class SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganizationLinks extends SpeakeasyBase {
    members?: string;
    products?: string;
}
export declare class SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganization extends SpeakeasyBase {
    links?: SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganizationLinks;
    name?: string;
    organizationId?: string;
}
export declare class SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbedded extends SpeakeasyBase {
    organization?: SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganization;
}
export declare class SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks extends SpeakeasyBase {
    configs?: string;
    environments?: string;
    members?: string;
    permissionGroups?: string;
    segments?: string;
    self?: string;
    tags?: string;
}
export declare class SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProduct extends SpeakeasyBase {
    embedded?: SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbedded;
    links?: SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks;
    description?: string;
    name?: string;
    order?: number;
    productId?: string;
    reasonRequired?: boolean;
}
export declare class SettingValueModelHaljsonEmbeddedEnvironmentEmbedded extends SpeakeasyBase {
    product?: SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProduct;
}
export declare class SettingValueModelHaljsonEmbeddedEnvironmentLinks extends SpeakeasyBase {
    self?: string;
}
export declare class SettingValueModelHaljsonEmbeddedEnvironment extends SpeakeasyBase {
    embedded?: SettingValueModelHaljsonEmbeddedEnvironmentEmbedded;
    links?: SettingValueModelHaljsonEmbeddedEnvironmentLinks;
    color?: string;
    description?: string;
    environmentId?: string;
    name?: string;
    order?: number;
    reasonRequired?: boolean;
}
export declare class SettingValueModelHaljsonEmbeddedIntegrationLinks extends SpeakeasyBase {
    description?: string;
    integrationLinkType?: IntegrationLinkTypeEnum;
    key?: string;
    url?: string;
}
export declare class SettingValueModelHaljsonEmbeddedSetting extends SpeakeasyBase {
    createdAt?: Date;
    creatorEmail?: string;
    creatorFullName?: string;
    hint?: string;
    isWatching?: boolean;
    key?: string;
    name?: string;
    order?: number;
    settingId?: number;
    settingType?: SettingTypeEnum;
}
export declare class SettingValueModelHaljsonEmbeddedSettingTags extends SpeakeasyBase {
    color?: string;
    name?: string;
    settingTagId?: number;
    tagId?: number;
}
export declare class SettingValueModelHaljsonEmbedded extends SpeakeasyBase {
    config?: SettingValueModelHaljsonEmbeddedConfig;
    environment?: SettingValueModelHaljsonEmbeddedEnvironment;
    integrationLinks?: SettingValueModelHaljsonEmbeddedIntegrationLinks[];
    setting?: SettingValueModelHaljsonEmbeddedSetting;
    settingTags?: SettingValueModelHaljsonEmbeddedSettingTags[];
}
export declare class SettingValueModelHaljsonLinks extends SpeakeasyBase {
    self?: string;
}
/**
 * When everything is ok, the setting value data returned.
 */
export declare class SettingValueModelHaljson extends SpeakeasyBase {
    embedded?: SettingValueModelHaljsonEmbedded;
    links?: SettingValueModelHaljsonLinks;
    lastUpdaterUserEmail?: string;
    lastUpdaterUserFullName?: string;
    readOnly?: boolean;
    /**
     * The percentage rule collection.
     */
    rolloutPercentageItems?: RolloutPercentageItemModel[];
    /**
     * The targeting rule collection.
     */
    rolloutRules?: RolloutRuleModel[];
    updatedAt?: Date;
    /**
     * The value to serve. It must respect the setting type.
     */
    value?: any;
}
