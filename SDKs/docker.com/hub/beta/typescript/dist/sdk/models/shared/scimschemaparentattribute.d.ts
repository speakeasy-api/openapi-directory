import { SpeakeasyBase } from "../../../internal/utils";
import { ScimSchemaAttribute } from "./scimschemaattribute";
export declare enum ScimSchemaParentAttributeTypeEnum {
    String = "string",
    Boolean = "boolean",
    Complex = "complex"
}
export declare class ScimSchemaParentAttribute extends SpeakeasyBase {
    caseExact?: boolean;
    description?: string;
    multiValued?: boolean;
    mutability?: string;
    name?: string;
    required?: boolean;
    returned?: string;
    subAttributes?: ScimSchemaAttribute[];
    type?: ScimSchemaParentAttributeTypeEnum;
    uniqueness?: string;
}
