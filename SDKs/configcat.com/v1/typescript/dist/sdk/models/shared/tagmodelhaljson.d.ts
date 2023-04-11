import { SpeakeasyBase } from "../../../internal/utils";
export declare class TagModelHaljsonEmbeddedProductEmbeddedOrganizationLinks extends SpeakeasyBase {
    members?: string;
    products?: string;
}
export declare class TagModelHaljsonEmbeddedProductEmbeddedOrganization extends SpeakeasyBase {
    links?: TagModelHaljsonEmbeddedProductEmbeddedOrganizationLinks;
    name?: string;
    organizationId?: string;
}
export declare class TagModelHaljsonEmbeddedProductEmbedded extends SpeakeasyBase {
    organization?: TagModelHaljsonEmbeddedProductEmbeddedOrganization;
}
export declare class TagModelHaljsonEmbeddedProductLinks extends SpeakeasyBase {
    configs?: string;
    environments?: string;
    members?: string;
    permissionGroups?: string;
    segments?: string;
    self?: string;
    tags?: string;
}
export declare class TagModelHaljsonEmbeddedProduct extends SpeakeasyBase {
    embedded?: TagModelHaljsonEmbeddedProductEmbedded;
    links?: TagModelHaljsonEmbeddedProductLinks;
    description?: string;
    name?: string;
    order?: number;
    productId?: string;
    reasonRequired?: boolean;
}
export declare class TagModelHaljsonEmbedded extends SpeakeasyBase {
    product?: TagModelHaljsonEmbeddedProduct;
}
export declare class TagModelHaljsonLinks extends SpeakeasyBase {
    self?: string;
}
/**
 * When the creation was successful.
 */
export declare class TagModelHaljson extends SpeakeasyBase {
    embedded?: TagModelHaljsonEmbedded;
    links?: TagModelHaljsonLinks;
    color?: string;
    name?: string;
    tagId?: number;
}
