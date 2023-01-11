import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ClassificationAttributesTypeEnum {
    AlternateFeedType = "AlternateFeedType",
    Genre = "Genre",
    Industry = "Industry",
    Language = "Language",
    MediaRating = "MediaRating"
}


export class ClassificationAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=parent_id" })
  parentId?: string;

  @SpeakeasyMetadata({ data: "json, name=tree_path" })
  treePath?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ClassificationAttributesTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;

  @SpeakeasyMetadata({ data: "json, name=value_path" })
  valuePath?: string;
}


// Classification
/** 
 * A classification, in general, is something that can describe other resources, such as countries, genres or
 * languages. How they're described (included or excluded, and whether they're the primary classification
 * of this type) is handled using other resources. Different functions of ART19 rely on classifications differently,
 * and could have an effect only on directory information, or may have an effect on ad decisioning.
 * 
**/
export class Classification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: ClassificationAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
