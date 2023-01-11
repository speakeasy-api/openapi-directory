import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnumOptionInput } from "./enumoption";


export enum CustomFieldRequestCustomLabelPositionEnum {
    Prefix = "prefix",
    Suffix = "suffix"
}

export enum CustomFieldRequestFormatEnum {
    Currency = "currency",
    Identifier = "identifier",
    Percentage = "percentage",
    Custom = "custom",
    None = "none"
}

export enum CustomFieldRequestResourceSubtypeEnum {
    Text = "text",
    Enum = "enum",
    MultiEnum = "multi_enum",
    Number = "number"
}


// CustomFieldRequestInput
/** 
 * Custom Fields store the metadata that is used in order to add user-specified information to tasks in Asana. Be sure to reference the [Custom Fields](/docs/asana-custom-fields) developer documentation for more information about how custom fields relate to various resources in Asana.
 * 
 * Users in Asana can [lock custom fields](https://asana.com/guide/help/premium/custom-fields#gl-lock-fields), which will make them read-only when accessed by other users. Attempting to edit a locked custom field will return HTTP error code `403 Forbidden`.
**/
export class CustomFieldRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency_code" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_label" })
  customLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_label_position" })
  customLabelPosition?: CustomFieldRequestCustomLabelPositionEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enum_options", elemType: EnumOptionInput })
  enumOptions?: EnumOptionInput[];

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: CustomFieldRequestFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=has_notifications_enabled" })
  hasNotificationsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=number_value" })
  numberValue?: number;

  @SpeakeasyMetadata({ data: "json, name=precision" })
  precision?: number;

  @SpeakeasyMetadata({ data: "json, name=resource_subtype" })
  resourceSubtype?: CustomFieldRequestResourceSubtypeEnum;

  @SpeakeasyMetadata({ data: "json, name=text_value" })
  textValue?: string;

  @SpeakeasyMetadata({ data: "json, name=workspace" })
  workspace: string;
}
