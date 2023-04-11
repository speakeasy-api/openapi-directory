import { SpeakeasyBase } from "../../../internal/utils";
import { SettingTypeEnum } from "./settingtypeenum";
export declare class SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganizationLinks extends SpeakeasyBase {
    members?: string;
    products?: string;
}
export declare class SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganization extends SpeakeasyBase {
    links?: SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganizationLinks;
    name?: string;
    organizationId?: string;
}
export declare class SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbedded extends SpeakeasyBase {
    organization?: SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganization;
}
export declare class SettingModelHaljsonEmbeddedTagsEmbeddedProductLinks extends SpeakeasyBase {
    configs?: string;
    environments?: string;
    members?: string;
    permissionGroups?: string;
    segments?: string;
    self?: string;
    tags?: string;
}
export declare class SettingModelHaljsonEmbeddedTagsEmbeddedProduct extends SpeakeasyBase {
    embedded?: SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbedded;
    links?: SettingModelHaljsonEmbeddedTagsEmbeddedProductLinks;
    description?: string;
    name?: string;
    order?: number;
    productId?: string;
    reasonRequired?: boolean;
}
export declare class SettingModelHaljsonEmbeddedTagsEmbedded extends SpeakeasyBase {
    product?: SettingModelHaljsonEmbeddedTagsEmbeddedProduct;
}
export declare class SettingModelHaljsonEmbeddedTagsLinks extends SpeakeasyBase {
    self?: string;
}
export declare class SettingModelHaljsonEmbeddedTags extends SpeakeasyBase {
    embedded?: SettingModelHaljsonEmbeddedTagsEmbedded;
    links?: SettingModelHaljsonEmbeddedTagsLinks;
    color?: string;
    name?: string;
    tagId?: number;
}
export declare class SettingModelHaljsonEmbedded extends SpeakeasyBase {
    tags?: SettingModelHaljsonEmbeddedTags[];
}
export declare class SettingModelHaljsonLinks extends SpeakeasyBase {
    self?: string;
}
/**
 * When the creation was successful.
 */
export declare class SettingModelHaljson extends SpeakeasyBase {
    embedded?: SettingModelHaljsonEmbedded;
    links?: SettingModelHaljsonLinks;
    configId?: string;
    configName?: string;
    hint?: string;
    key?: string;
    name?: string;
    order?: number;
    settingId?: number;
    settingType?: SettingTypeEnum;
}
