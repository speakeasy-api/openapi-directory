import { SpeakeasyBase } from "../../../internal/utils";
export declare class ConfigModelHaljsonEmbeddedProductEmbeddedOrganizationLinks extends SpeakeasyBase {
    members?: string;
    products?: string;
}
export declare class ConfigModelHaljsonEmbeddedProductEmbeddedOrganization extends SpeakeasyBase {
    links?: ConfigModelHaljsonEmbeddedProductEmbeddedOrganizationLinks;
    name?: string;
    organizationId?: string;
}
export declare class ConfigModelHaljsonEmbeddedProductEmbedded extends SpeakeasyBase {
    organization?: ConfigModelHaljsonEmbeddedProductEmbeddedOrganization;
}
export declare class ConfigModelHaljsonEmbeddedProductLinks extends SpeakeasyBase {
    configs?: string;
    environments?: string;
    members?: string;
    permissionGroups?: string;
    segments?: string;
    self?: string;
    tags?: string;
}
export declare class ConfigModelHaljsonEmbeddedProduct extends SpeakeasyBase {
    embedded?: ConfigModelHaljsonEmbeddedProductEmbedded;
    links?: ConfigModelHaljsonEmbeddedProductLinks;
    description?: string;
    name?: string;
    order?: number;
    productId?: string;
    reasonRequired?: boolean;
}
export declare class ConfigModelHaljsonEmbedded extends SpeakeasyBase {
    product?: ConfigModelHaljsonEmbeddedProduct;
}
export declare class ConfigModelHaljsonLinks extends SpeakeasyBase {
    self?: string;
    settings?: string;
}
/**
 * When everything is ok, the config data returned.
 */
export declare class ConfigModelHaljson extends SpeakeasyBase {
    embedded?: ConfigModelHaljsonEmbedded;
    links?: ConfigModelHaljsonLinks;
    configId?: string;
    description?: string;
    name?: string;
    order?: number;
}
