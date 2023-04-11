import { SpeakeasyBase } from "../../../internal/utils";
import { RolloutRuleComparatorEnum } from "./rolloutrulecomparatorenum";
export declare class SegmentModelHaljsonEmbeddedProductEmbeddedOrganizationLinks extends SpeakeasyBase {
    members?: string;
    products?: string;
}
export declare class SegmentModelHaljsonEmbeddedProductEmbeddedOrganization extends SpeakeasyBase {
    links?: SegmentModelHaljsonEmbeddedProductEmbeddedOrganizationLinks;
    name?: string;
    organizationId?: string;
}
export declare class SegmentModelHaljsonEmbeddedProductEmbedded extends SpeakeasyBase {
    organization?: SegmentModelHaljsonEmbeddedProductEmbeddedOrganization;
}
export declare class SegmentModelHaljsonEmbeddedProductLinks extends SpeakeasyBase {
    configs?: string;
    environments?: string;
    members?: string;
    permissionGroups?: string;
    segments?: string;
    self?: string;
    tags?: string;
}
export declare class SegmentModelHaljsonEmbeddedProduct extends SpeakeasyBase {
    embedded?: SegmentModelHaljsonEmbeddedProductEmbedded;
    links?: SegmentModelHaljsonEmbeddedProductLinks;
    description?: string;
    name?: string;
    order?: number;
    productId?: string;
    reasonRequired?: boolean;
}
export declare class SegmentModelHaljsonEmbedded extends SpeakeasyBase {
    product?: SegmentModelHaljsonEmbeddedProduct;
}
export declare class SegmentModelHaljsonLinks extends SpeakeasyBase {
    self?: string;
}
/**
 * When the creation was successful.
 */
export declare class SegmentModelHaljson extends SpeakeasyBase {
    embedded?: SegmentModelHaljsonEmbedded;
    links?: SegmentModelHaljsonLinks;
    comparator?: RolloutRuleComparatorEnum;
    comparisonAttribute?: string;
    comparisonValue?: string;
    createdAt?: Date;
    creatorEmail?: string;
    creatorFullName?: string;
    description?: string;
    lastUpdaterEmail?: string;
    lastUpdaterFullName?: string;
    name?: string;
    segmentId?: string;
    updatedAt?: Date;
}
