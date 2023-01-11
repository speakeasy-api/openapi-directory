import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ClassificationAttributesTypeEnum {
    AlternateFeedType = "AlternateFeedType",
    Genre = "Genre",
    Industry = "Industry",
    Language = "Language",
    MediaRating = "MediaRating"
}
export declare class ClassificationAttributes extends SpeakeasyBase {
    createdAt?: Date;
    displayName?: string;
    metadata?: Record<string, any>;
    parentId?: string;
    treePath?: string[];
    type?: ClassificationAttributesTypeEnum;
    updatedAt?: Date;
    value?: string;
    valuePath?: string;
}
/**
 * A classification, in general, is something that can describe other resources, such as countries, genres or
 * languages. How they're described (included or excluded, and whether they're the primary classification
 * of this type) is handled using other resources. Different functions of ART19 rely on classifications differently,
 * and could have an effect only on directory information, or may have an effect on ad decisioning.
 *
**/
export declare class Classification extends SpeakeasyBase {
    attributes?: ClassificationAttributes;
    id?: string;
    type?: string;
}
