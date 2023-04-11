import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ScimSchemaAttributeTypeEnum {
    String = "string",
    Boolean = "boolean",
    Complex = "complex"
}
export declare class ScimSchemaAttribute extends SpeakeasyBase {
    caseExact?: boolean;
    description?: string;
    multiValued?: boolean;
    mutability?: string;
    name?: string;
    required?: boolean;
    returned?: string;
    type?: ScimSchemaAttributeTypeEnum;
    uniqueness?: string;
}
