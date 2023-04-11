import { SpeakeasyBase } from "../../../internal/utils";
export declare class FieldSchemaUpdate extends SpeakeasyBase {
    /**
     * JSONSchema representation of the field
     */
    newSchema: Record<string, any>;
    /**
     * JSONSchema representation of the field
     */
    oldSchema: Record<string, any>;
}
