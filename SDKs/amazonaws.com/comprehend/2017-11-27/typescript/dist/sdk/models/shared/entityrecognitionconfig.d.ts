import { SpeakeasyBase } from "../../../internal/utils";
import { EntityTypesListItem } from "./entitytypeslistitem";
/**
 * Configuration required for an entity recognition model.
 */
export declare class EntityRecognitionConfig extends SpeakeasyBase {
    entityTypes: EntityTypesListItem[];
}
