import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of classification. The type of retrievable classifications depends on the privileges
 *
 * @remarks
 * of the credential being used.
 *
 */
export declare enum ClassificationAttributesTypeEnum {
    AlternateFeedType = "AlternateFeedType",
    Genre = "Genre",
    Industry = "Industry",
    Language = "Language",
    MediaRating = "MediaRating"
}
export declare class ClassificationAttributes extends SpeakeasyBase {
    createdAt?: Date;
    /**
     * Human readable representation of the classification
     */
    displayName?: string;
    /**
     * An object with more detailed information about the classification.
     *
     * @remarks
     * The possible members are different per type of classification.
     *
     */
    metadata?: Record<string, any>;
    /**
     * This will be replaced by the relationship `parent` in a future update.<br/>
     *
     * @remarks
     * For hierarchical classifications, this is the ID of the parent classification
     *
     */
    parentId?: string;
    /**
     * For hierarchical classifications this is the list of IDs reflecting the hierarchy starting
     *
     * @remarks
     * with the root level node.
     *
     */
    treePath?: string[];
    /**
     * The type of classification. The type of retrievable classifications depends on the privileges
     *
     * @remarks
     * of the credential being used.
     *
     */
    type?: ClassificationAttributesTypeEnum;
    updatedAt?: Date;
    /**
     * The value the classification represents. The meaning of this attribute depends on the type of classification.
     *
     * @remarks
     *
     */
    value?: string;
    /**
     * For hierarchical classifications this is a concatenated string of all the classification
     *
     * @remarks
     * values from the root to this classification using a `: ` as separator.
     *
     */
    valuePath?: string;
}
/**
 * A classification, in general, is something that can describe other resources, such as countries, genres or
 *
 * @remarks
 * languages. How they're described (included or excluded, and whether they're the primary classification
 * of this type) is handled using other resources. Different functions of ART19 rely on classifications differently,
 * and could have an effect only on directory information, or may have an effect on ad decisioning.
 *
 */
export declare class Classification extends SpeakeasyBase {
    attributes?: ClassificationAttributes;
    id?: string;
    /**
     * The type of resource. This is always `classifications`
     */
    type?: string;
}
