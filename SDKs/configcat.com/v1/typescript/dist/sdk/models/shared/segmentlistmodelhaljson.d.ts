import { SpeakeasyBase } from "../../../internal/utils";
export declare class SegmentListModelHaljsonEmbeddedProductEmbeddedOrganizationLinks extends SpeakeasyBase {
    members?: string;
    products?: string;
}
export declare class SegmentListModelHaljsonEmbeddedProductEmbeddedOrganization extends SpeakeasyBase {
    links?: SegmentListModelHaljsonEmbeddedProductEmbeddedOrganizationLinks;
    name?: string;
    organizationId?: string;
}
export declare class SegmentListModelHaljsonEmbeddedProductEmbedded extends SpeakeasyBase {
    organization?: SegmentListModelHaljsonEmbeddedProductEmbeddedOrganization;
}
export declare class SegmentListModelHaljsonEmbeddedProductLinks extends SpeakeasyBase {
    configs?: string;
    environments?: string;
    members?: string;
    permissionGroups?: string;
    segments?: string;
    self?: string;
    tags?: string;
}
export declare class SegmentListModelHaljsonEmbeddedProduct extends SpeakeasyBase {
    embedded?: SegmentListModelHaljsonEmbeddedProductEmbedded;
    links?: SegmentListModelHaljsonEmbeddedProductLinks;
    description?: string;
    name?: string;
    order?: number;
    productId?: string;
    reasonRequired?: boolean;
}
export declare class SegmentListModelHaljsonEmbedded extends SpeakeasyBase {
    product?: SegmentListModelHaljsonEmbeddedProduct;
}
export declare class SegmentListModelHaljsonLinks extends SpeakeasyBase {
    self?: string;
}
export declare class SegmentListModelHaljson extends SpeakeasyBase {
    embedded?: SegmentListModelHaljsonEmbedded;
    links?: SegmentListModelHaljsonLinks;
    createdAt?: Date;
    creatorEmail?: string;
    creatorFullName?: string;
    description?: string;
    lastUpdaterEmail?: string;
    lastUpdaterFullName?: string;
    name?: string;
    segmentId?: string;
    updatedAt?: Date;
    usage?: number;
}
