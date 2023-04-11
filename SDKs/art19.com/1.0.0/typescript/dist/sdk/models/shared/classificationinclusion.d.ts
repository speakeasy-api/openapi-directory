import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";
/**
 * This will be replaced by the relationship `classification` in a future update.<br/>
 */
export declare enum ClassificationInclusionAttributesClassificationTypeEnum {
    AlternateFeedType = "AlternateFeedType",
    Genre = "Genre",
    Industry = "Industry",
    Language = "Language",
    MediaRating = "MediaRating"
}
/**
 * This will be replaced by the relationship `classified` in a future update.<br/>
 */
export declare enum ClassificationInclusionAttributesClassifiedTypeEnum {
    Series = "Series",
    Season = "Season",
    Episode = "Episode"
}
export declare class ClassificationInclusionAttributes extends SpeakeasyBase {
    /**
     * This will be replaced by the relationship `classification` in a future update.<br/>
     *
     * @remarks
     * The ID of the classification linked to the entity
     *
     */
    classificationId?: string;
    /**
     * This will be replaced by the relationship `classification` in a future update.<br/>
     */
    classificationType?: ClassificationInclusionAttributesClassificationTypeEnum;
    /**
     * This will be replaced by the relationship `classified` in a future update.<br/>
     *
     * @remarks
     * The ID of the entity linked to the classification
     *
     */
    classifiedId?: string;
    /**
     * This will be replaced by the relationship `classified` in a future update.<br/>
     */
    classifiedType?: ClassificationInclusionAttributesClassifiedTypeEnum;
    createdAt?: Date;
    /**
     * The position or order of the linked classification within the classified resource
     */
    position?: number;
    /**
     * When `true` it describes the best classification of a specific type for a given
     *
     * @remarks
     * classified item
     *
     */
    primary?: boolean;
    updatedAt?: Date;
}
export declare class ClassificationInclusionRelationshipsClassification extends SpeakeasyBase {
    data?: ResourceIdentifier;
}
export declare class ClassificationInclusionRelationships extends SpeakeasyBase {
    classification?: ClassificationInclusionRelationshipsClassification;
}
/**
 * Connects a Classification with a classified item like a Series, Season or Episode.
 *
 * @remarks
 *
 */
export declare class ClassificationInclusion extends SpeakeasyBase {
    attributes?: ClassificationInclusionAttributes;
    id?: string;
    relationships?: ClassificationInclusionRelationships;
    /**
     * The type of resource. This is always `classification_inclusion`
     */
    type?: string;
}
