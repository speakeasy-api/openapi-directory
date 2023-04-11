import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionPrivacyEnum } from "./collectionprivacyenum";
/**
 * Edit the collection metadata
 */
export declare class CollectionModification extends SpeakeasyBase {
    /**
     * The collection main privacy mode.
     *
     * @remarks
     * - `private`: The collection is private and can be only accessed, modified and administred by specified collaborators users.
     *
     */
    privacy?: CollectionPrivacyEnum;
    /**
     * The title of the collection
     */
    title?: string;
}
