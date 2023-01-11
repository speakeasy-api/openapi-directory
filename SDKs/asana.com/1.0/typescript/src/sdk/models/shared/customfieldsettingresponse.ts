import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserCompact } from "./usercompact";
import { EnumOption } from "./enumoption";


export enum CustomFieldSettingResponseCustomFieldCustomLabelPositionEnum {
    Prefix = "prefix",
    Suffix = "suffix"
}


// CustomFieldSettingResponseCustomFieldEnumValue
/** 
 * *Conditional*. Only relevant for custom fields of type `enum`. This object is the chosen value of an enum custom field.
**/
export class CustomFieldSettingResponseCustomFieldEnumValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}

export enum CustomFieldSettingResponseCustomFieldFormatEnum {
    Currency = "currency",
    Identifier = "identifier",
    Percentage = "percentage",
    Custom = "custom",
    None = "none"
}

export enum CustomFieldSettingResponseCustomFieldResourceSubtypeEnum {
    Text = "text",
    Enum = "enum",
    MultiEnum = "multi_enum",
    Number = "number"
}

export enum CustomFieldSettingResponseCustomFieldTypeEnum {
    Text = "text",
    Enum = "enum",
    MultiEnum = "multi_enum",
    Number = "number"
}


// CustomFieldSettingResponseCustomField
/** 
 * The custom field that is applied to the `parent`.
**/
export class CustomFieldSettingResponseCustomField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: UserCompact;

  @SpeakeasyMetadata({ data: "json, name=currency_code" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_label" })
  customLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_label_position" })
  customLabelPosition?: CustomFieldSettingResponseCustomFieldCustomLabelPositionEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=display_value" })
  displayValue?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enum_options", elemType: EnumOption })
  enumOptions?: EnumOption[];

  @SpeakeasyMetadata({ data: "json, name=enum_value" })
  enumValue?: CustomFieldSettingResponseCustomFieldEnumValue;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: CustomFieldSettingResponseCustomFieldFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=has_notifications_enabled" })
  hasNotificationsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_global_to_workspace" })
  isGlobalToWorkspace?: boolean;

  @SpeakeasyMetadata({ data: "json, name=multi_enum_values", elemType: EnumOption })
  multiEnumValues?: EnumOption[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=number_value" })
  numberValue?: number;

  @SpeakeasyMetadata({ data: "json, name=precision" })
  precision?: number;

  @SpeakeasyMetadata({ data: "json, name=resource_subtype" })
  resourceSubtype?: CustomFieldSettingResponseCustomFieldResourceSubtypeEnum;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=text_value" })
  textValue?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CustomFieldSettingResponseCustomFieldTypeEnum;
}


// CustomFieldSettingResponseParent
/** 
 * The parent to which the custom field is applied. This can be a project or portfolio and indicates that the tasks or projects that the parent contains may be given custom field values for this custom field.
**/
export class CustomFieldSettingResponseParent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


// CustomFieldSettingResponseProject
/** 
 * *Deprecated: new integrations should prefer the `parent` field.* The id of the project that this custom field settings refers to.
**/
export class CustomFieldSettingResponseProject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


// CustomFieldSettingResponse
/** 
 * Custom Fields Settings objects represent the many-to-many join of the Custom Field and Project as well as stores information that is relevant to that particular pairing.
**/
export class CustomFieldSettingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_field" })
  customField?: CustomFieldSettingResponseCustomField;

  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=is_important" })
  isImportant?: boolean;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: CustomFieldSettingResponseParent;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: CustomFieldSettingResponseProject;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}
