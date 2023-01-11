import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";


export enum ClassificationInclusionAttributesClassificationTypeEnum {
    AlternateFeedType = "AlternateFeedType",
    Genre = "Genre",
    Industry = "Industry",
    Language = "Language",
    MediaRating = "MediaRating"
}

export enum ClassificationInclusionAttributesClassifiedTypeEnum {
    Series = "Series",
    Season = "Season",
    Episode = "Episode"
}


export class ClassificationInclusionAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classification_id" })
  classificationId?: string;

  @SpeakeasyMetadata({ data: "json, name=classification_type" })
  classificationType?: ClassificationInclusionAttributesClassificationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=classified_id" })
  classifiedId?: string;

  @SpeakeasyMetadata({ data: "json, name=classified_type" })
  classifiedType?: ClassificationInclusionAttributesClassifiedTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: number;

  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}


export class ClassificationInclusionRelationshipsClassification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ResourceIdentifier;
}


export class ClassificationInclusionRelationships extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification?: ClassificationInclusionRelationshipsClassification;
}


// ClassificationInclusion
/** 
 * Connects a Classification with a classified item like a Series, Season or Episode.
 * 
**/
export class ClassificationInclusion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: ClassificationInclusionAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships?: ClassificationInclusionRelationships;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
