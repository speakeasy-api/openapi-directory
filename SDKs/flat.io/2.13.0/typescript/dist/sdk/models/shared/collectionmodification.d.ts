import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionPrivacyEnum } from "./collectionprivacyenum";
/**
 * Edit the collection metadata
**/
export declare class CollectionModification extends SpeakeasyBase {
    privacy?: CollectionPrivacyEnum;
    title?: string;
}
