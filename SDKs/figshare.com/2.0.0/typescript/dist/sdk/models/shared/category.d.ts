import { SpeakeasyBase } from "../../../internal/utils";
export declare class Category extends SpeakeasyBase {
    /**
     * Category id
     */
    id: number;
    /**
     * Parent category
     */
    parentId: number;
    /**
     * Path to all ancestor ids
     */
    path: string;
    /**
     * ID in original standard taxonomy
     */
    sourceId: string;
    /**
     * Internal id of taxonomy the category is part of
     */
    taxonomyId: number;
    /**
     * Category title
     */
    title: string;
}
