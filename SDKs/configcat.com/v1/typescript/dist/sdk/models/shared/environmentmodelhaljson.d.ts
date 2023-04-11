import { SpeakeasyBase } from "../../../internal/utils";
export declare class EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganizationLinks extends SpeakeasyBase {
    members?: string;
    products?: string;
}
export declare class EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganization extends SpeakeasyBase {
    links?: EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganizationLinks;
    name?: string;
    organizationId?: string;
}
export declare class EnvironmentModelHaljsonEmbeddedProductEmbedded extends SpeakeasyBase {
    organization?: EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganization;
}
export declare class EnvironmentModelHaljsonEmbeddedProductLinks extends SpeakeasyBase {
    configs?: string;
    environments?: string;
    members?: string;
    permissionGroups?: string;
    segments?: string;
    self?: string;
    tags?: string;
}
export declare class EnvironmentModelHaljsonEmbeddedProduct extends SpeakeasyBase {
    embedded?: EnvironmentModelHaljsonEmbeddedProductEmbedded;
    links?: EnvironmentModelHaljsonEmbeddedProductLinks;
    description?: string;
    name?: string;
    order?: number;
    productId?: string;
    reasonRequired?: boolean;
}
export declare class EnvironmentModelHaljsonEmbedded extends SpeakeasyBase {
    product?: EnvironmentModelHaljsonEmbeddedProduct;
}
export declare class EnvironmentModelHaljsonLinks extends SpeakeasyBase {
    self?: string;
}
/**
 * When everything is ok, the environment data returned.
 */
export declare class EnvironmentModelHaljson extends SpeakeasyBase {
    embedded?: EnvironmentModelHaljsonEmbedded;
    links?: EnvironmentModelHaljsonLinks;
    color?: string;
    description?: string;
    environmentId?: string;
    name?: string;
    order?: number;
    reasonRequired?: boolean;
}
