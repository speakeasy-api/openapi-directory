import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";
export declare enum ClassificationInclusionAttributesClassificationTypeEnum {
    AlternateFeedType = "AlternateFeedType",
    Genre = "Genre",
    Industry = "Industry",
    Language = "Language",
    MediaRating = "MediaRating"
}
export declare enum ClassificationInclusionAttributesClassifiedTypeEnum {
    Series = "Series",
    Season = "Season",
    Episode = "Episode"
}
export declare class ClassificationInclusionAttributes extends SpeakeasyBase {
    classificationId?: string;
    classificationType?: ClassificationInclusionAttributesClassificationTypeEnum;
    classifiedId?: string;
    classifiedType?: ClassificationInclusionAttributesClassifiedTypeEnum;
    createdAt?: Date;
    position?: number;
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
**/
export declare class ClassificationInclusion extends SpeakeasyBase {
    attributes?: ClassificationInclusionAttributes;
    id?: string;
    relationships?: ClassificationInclusionRelationships;
    type?: string;
}
