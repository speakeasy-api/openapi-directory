import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that uniquely identifies an entity property.
 */
export declare class EntityPropertyReference extends SpeakeasyBase {
    componentName?: string;
    entityId?: string;
    externalIdProperty?: Record<string, string>;
    propertyName: string;
}
