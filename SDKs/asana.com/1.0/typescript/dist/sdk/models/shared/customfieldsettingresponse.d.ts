import { SpeakeasyBase } from "../../../internal/utils";
import { UserCompact } from "./usercompact";
import { EnumOption } from "./enumoption";
export declare enum CustomFieldSettingResponseCustomFieldCustomLabelPositionEnum {
    Prefix = "prefix",
    Suffix = "suffix"
}
/**
 * *Conditional*. Only relevant for custom fields of type `enum`. This object is the chosen value of an enum custom field.
**/
export declare class CustomFieldSettingResponseCustomFieldEnumValue extends SpeakeasyBase {
    color?: string;
    enabled?: boolean;
    gid?: string;
    name?: string;
    resourceType?: string;
}
export declare enum CustomFieldSettingResponseCustomFieldFormatEnum {
    Currency = "currency",
    Identifier = "identifier",
    Percentage = "percentage",
    Custom = "custom",
    None = "none"
}
export declare enum CustomFieldSettingResponseCustomFieldResourceSubtypeEnum {
    Text = "text",
    Enum = "enum",
    MultiEnum = "multi_enum",
    Number = "number"
}
export declare enum CustomFieldSettingResponseCustomFieldTypeEnum {
    Text = "text",
    Enum = "enum",
    MultiEnum = "multi_enum",
    Number = "number"
}
/**
 * The custom field that is applied to the `parent`.
**/
export declare class CustomFieldSettingResponseCustomField extends SpeakeasyBase {
    createdBy?: UserCompact;
    currencyCode?: string;
    customLabel?: string;
    customLabelPosition?: CustomFieldSettingResponseCustomFieldCustomLabelPositionEnum;
    description?: string;
    displayValue?: string;
    enabled?: boolean;
    enumOptions?: EnumOption[];
    enumValue?: CustomFieldSettingResponseCustomFieldEnumValue;
    format?: CustomFieldSettingResponseCustomFieldFormatEnum;
    gid?: string;
    hasNotificationsEnabled?: boolean;
    isGlobalToWorkspace?: boolean;
    multiEnumValues?: EnumOption[];
    name?: string;
    numberValue?: number;
    precision?: number;
    resourceSubtype?: CustomFieldSettingResponseCustomFieldResourceSubtypeEnum;
    resourceType?: string;
    textValue?: string;
    type?: CustomFieldSettingResponseCustomFieldTypeEnum;
}
/**
 * The parent to which the custom field is applied. This can be a project or portfolio and indicates that the tasks or projects that the parent contains may be given custom field values for this custom field.
**/
export declare class CustomFieldSettingResponseParent extends SpeakeasyBase {
    gid?: string;
    name?: string;
    resourceType?: string;
}
/**
 * *Deprecated: new integrations should prefer the `parent` field.* The id of the project that this custom field settings refers to.
**/
export declare class CustomFieldSettingResponseProject extends SpeakeasyBase {
    gid?: string;
    name?: string;
    resourceType?: string;
}
/**
 * Custom Fields Settings objects represent the many-to-many join of the Custom Field and Project as well as stores information that is relevant to that particular pairing.
**/
export declare class CustomFieldSettingResponse extends SpeakeasyBase {
    customField?: CustomFieldSettingResponseCustomField;
    gid?: string;
    isImportant?: boolean;
    parent?: CustomFieldSettingResponseParent;
    project?: CustomFieldSettingResponseProject;
    resourceType?: string;
}
