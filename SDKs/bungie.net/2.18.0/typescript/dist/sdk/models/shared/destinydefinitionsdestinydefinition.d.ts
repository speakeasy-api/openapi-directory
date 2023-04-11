import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides common properties for destiny definitions.
 */
export declare class DestinyDefinitionsDestinyDefinition extends SpeakeasyBase {
    /**
     * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
     *
     * @remarks
     * When entities refer to each other in Destiny content, it is this hash that they are referring to.
     */
    hash?: number;
    /**
     * The index of the entity as it was found in the investment tables.
     */
    index?: number;
    /**
     * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
     */
    redacted?: boolean;
}
