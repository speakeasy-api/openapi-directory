import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProductModelHaljsonEmbeddedOrganizationLinks extends SpeakeasyBase {
    members?: string;
    products?: string;
}
export declare class ProductModelHaljsonEmbeddedOrganization extends SpeakeasyBase {
    links?: ProductModelHaljsonEmbeddedOrganizationLinks;
    name?: string;
    organizationId?: string;
}
export declare class ProductModelHaljsonEmbedded extends SpeakeasyBase {
    organization?: ProductModelHaljsonEmbeddedOrganization;
}
export declare class ProductModelHaljsonLinks extends SpeakeasyBase {
    configs?: string;
    environments?: string;
    members?: string;
    permissionGroups?: string;
    segments?: string;
    self?: string;
    tags?: string;
}
/**
 * When the creation was successful.
 */
export declare class ProductModelHaljson extends SpeakeasyBase {
    embedded?: ProductModelHaljsonEmbedded;
    links?: ProductModelHaljsonLinks;
    description?: string;
    name?: string;
    order?: number;
    productId?: string;
    reasonRequired?: boolean;
}
