import { SpeakeasyBase } from "../../../internal/utils";
import { UserCompact } from "./usercompact";
import { EnumOption } from "./enumoption";
export declare enum CustomFieldResponseCustomLabelPositionEnum {
    Prefix = "prefix",
    Suffix = "suffix"
}
/**
 * *Conditional*. Only relevant for custom fields of type `enum`. This object is the chosen value of an enum custom field.
**/
export declare class CustomFieldResponseEnumValue extends SpeakeasyBase {
    color?: string;
    enabled?: boolean;
    gid?: string;
    name?: string;
    resourceType?: string;
}
export declare enum CustomFieldResponseFormatEnum {
    Currency = "currency",
    Identifier = "identifier",
    Percentage = "percentage",
    Custom = "custom",
    None = "none"
}
export declare enum CustomFieldResponseResourceSubtypeEnum {
    Text = "text",
    Enum = "enum",
    MultiEnum = "multi_enum",
    Number = "number"
}
export declare enum CustomFieldResponseTypeEnum {
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
export declare class CustomFieldResponse extends SpeakeasyBase {
    createdBy?: UserCompact;
    currencyCode?: string;
    customLabel?: string;
    customLabelPosition?: CustomFieldResponseCustomLabelPositionEnum;
    description?: string;
    displayValue?: string;
    enabled?: boolean;
    enumOptions?: EnumOption[];
    enumValue?: CustomFieldResponseEnumValue;
    format?: CustomFieldResponseFormatEnum;
    gid?: string;
    hasNotificationsEnabled?: boolean;
    isGlobalToWorkspace?: boolean;
    multiEnumValues?: EnumOption[];
    name?: string;
    numberValue?: number;
    precision?: number;
    resourceSubtype?: CustomFieldResponseResourceSubtypeEnum;
    resourceType?: string;
    textValue?: string;
    type?: CustomFieldResponseTypeEnum;
}
