import { SpeakeasyBase } from "../../../internal/utils";
import { FieldAdd } from "./fieldadd";
import { FieldRemove } from "./fieldremove";
import { FieldSchemaUpdate } from "./fieldschemaupdate";
export declare enum FieldTransformTransformTypeEnum {
    AddField = "add_field",
    RemoveField = "remove_field",
    UpdateFieldSchema = "update_field_schema"
}
/**
 * Describes the difference between two Streams.
 */
export declare class FieldTransform extends SpeakeasyBase {
    addField?: FieldAdd;
    breaking: boolean;
    /**
     * A field name is a list of strings that form the path to the field.
     */
    fieldName: string[];
    removeField?: FieldRemove;
    transformType: FieldTransformTransformTypeEnum;
    updateFieldSchema?: FieldSchemaUpdate;
}
