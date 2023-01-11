import { SpeakeasyBase } from "../../../internal/utils";
import { EnumOptionInput } from "./enumoption";
export declare enum CustomFieldRequestCustomLabelPositionEnum {
    Prefix = "prefix",
    Suffix = "suffix"
}
export declare enum CustomFieldRequestFormatEnum {
    Currency = "currency",
    Identifier = "identifier",
    Percentage = "percentage",
    Custom = "custom",
    None = "none"
}
export declare enum CustomFieldRequestResourceSubtypeEnum {
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
export declare class CustomFieldRequestInput extends SpeakeasyBase {
    currencyCode?: string;
    customLabel?: string;
    customLabelPosition?: CustomFieldRequestCustomLabelPositionEnum;
    description?: string;
    enabled?: boolean;
    enumOptions?: EnumOptionInput[];
    format?: CustomFieldRequestFormatEnum;
    hasNotificationsEnabled?: boolean;
    name?: string;
    numberValue?: number;
    precision?: number;
    resourceSubtype?: CustomFieldRequestResourceSubtypeEnum;
    textValue?: string;
    workspace: string;
}
