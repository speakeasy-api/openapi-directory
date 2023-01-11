import { SpeakeasyBase } from "../../../internal/utils";
import { EnumOption } from "./enumoption";
export declare enum CustomFieldCompactResourceSubtypeEnum {
    Text = "text",
    Enum = "enum",
    MultiEnum = "multi_enum",
    Number = "number"
}
export declare enum CustomFieldCompactTypeEnum {
    Text = "text",
    Enum = "enum",
    MultiEnum = "multi_enum",
    Number = "number"
}
/**
 * Custom Fields store the metadata that is used in order to add user-specified information to tasks in Asana. Be sure to reference the [Custom Fields](/docs/asana-custom-fields) developer documentation for more information about how custom fields relate to various resources in Asana.
 *
 * Users in Asana can [lock custom fields](https://asana.com/guide/help/premium/custom-fields#gl-lock-fields), which will make them read-only when accessed by other users. Attempting to edit a locked custom field will return HTTP error code `403 Forbidden`.
**/
export declare class CustomFieldCompact extends SpeakeasyBase {
    displayValue?: string;
    enabled?: boolean;
    enumOptions?: EnumOption[];
    gid?: string;
    name?: string;
    numberValue?: number;
    resourceSubtype?: CustomFieldCompactResourceSubtypeEnum;
    resourceType?: string;
    textValue?: string;
    type?: CustomFieldCompactTypeEnum;
}
