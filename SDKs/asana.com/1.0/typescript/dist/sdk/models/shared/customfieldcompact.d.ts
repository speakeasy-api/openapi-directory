import { SpeakeasyBase } from "../../../internal/utils";
import { EnumOption } from "./enumoption";
/**
 * *Conditional*. Only relevant for custom fields of type `date`. This object reflects the chosen date (and optionally, time) value of a `date` custom field. If no date is selected, the value of `date_value` will be `null`.
 */
export declare class CustomFieldCompactDateValue extends SpeakeasyBase {
    /**
     * A string representing the date in YYYY-MM-DD format.
     */
    date?: string;
    /**
     * A string representing the date in ISO 8601 format. If no time value is selected, the value of `date-time` will be `null`.
     */
    dateTime?: string;
}
/**
 * Enum options are the possible values which an enum custom field can adopt. An enum custom field must contain at least 1 enum option but no more than 500.
 *
 * @remarks
 *
 * You can add enum options to a custom field by using the `POST /custom_fields/custom_field_gid/enum_options` endpoint.
 *
 * **It is not possible to remove or delete an enum option**. Instead, enum options can be disabled by updating the `enabled` field to false with the `PUT /enum_options/enum_option_gid` endpoint. Other attributes can be updated similarly.
 *
 * On creation of an enum option, `enabled` is always set to `true`, meaning the enum option is a selectable value for the custom field. Setting `enabled=false` is equivalent to “trashing” the enum option in the Asana web app within the “Edit Fields” dialog. The enum option will no longer be selectable but, if the enum option value was previously set within a task, the task will retain the value.
 *
 * Enum options are an ordered list and by default new enum options are inserted at the end. Ordering in relation to existing enum options can be specified on creation by using `insert_before` or `insert_after` to reference an existing enum option. Only one of `insert_before` and `insert_after` can be provided when creating a new enum option.
 *
 * An enum options list can be reordered with the `POST /custom_fields/custom_field_gid/enum_options/insert` endpoint.
 */
export declare class CustomFieldCompactEnumValue extends SpeakeasyBase {
    /**
     * The color of the enum option. Defaults to ‘none’.
     */
    color?: string;
    /**
     * Whether or not the enum option is a selectable value for the custom field.
     */
    enabled?: boolean;
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * The name of the enum option.
     */
    name?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
}
/**
 * The type of the custom field. Must be one of the given values.
 *
 * @remarks
 *
 */
export declare enum CustomFieldCompactResourceSubtypeEnum {
    Text = "text",
    Enum = "enum",
    MultiEnum = "multi_enum",
    Number = "number",
    Date = "date",
    People = "people"
}
/**
 * *Deprecated: new integrations should prefer the resource_subtype field.* The type of the custom field. Must be one of the given values.
 *
 * @remarks
 *
 */
export declare enum CustomFieldCompactTypeEnum {
    Text = "text",
    Enum = "enum",
    MultiEnum = "multi_enum",
    Number = "number"
}
/**
 * Custom Fields store the metadata that is used in order to add user-specified information to tasks in Asana. Be sure to reference the [Custom Fields](/docs/asana-custom-fields) developer documentation for more information about how custom fields relate to various resources in Asana.
 *
 * @remarks
 *
 * Users in Asana can [lock custom fields](https://asana.com/guide/help/premium/custom-fields#gl-lock-fields), which will make them read-only when accessed by other users. Attempting to edit a locked custom field will return HTTP error code `403 Forbidden`.
 */
export declare class CustomFieldCompact extends SpeakeasyBase {
    /**
     * *Conditional*. Only relevant for custom fields of type `date`. This object reflects the chosen date (and optionally, time) value of a `date` custom field. If no date is selected, the value of `date_value` will be `null`.
     */
    dateValue?: CustomFieldCompactDateValue;
    /**
     * A string representation for the value of the custom field. Integrations that don't require the underlying type should use this field to read values. Using this field will future-proof an app against new custom field types.
     */
    displayValue?: string;
    /**
     * *Conditional*. Determines if the custom field is enabled or not.
     */
    enabled?: boolean;
    /**
     * *Conditional*. Only relevant for custom fields of type `enum`. This array specifies the possible values which an `enum` custom field can adopt. To modify the enum options, refer to [working with enum options](/docs/create-an-enum-option).
     */
    enumOptions?: EnumOption[];
    enumValue?: CustomFieldCompactEnumValue;
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * *Conditional*. Only relevant for custom fields of type `multi_enum`. This object is the chosen values of a `multi_enum` custom field.
     */
    multiEnumValues?: EnumOption[];
    /**
     * The name of the custom field.
     */
    name?: string;
    /**
     * *Conditional*. This number is the value of a `number` custom field.
     */
    numberValue?: number;
    /**
     * The type of the custom field. Must be one of the given values.
     *
     * @remarks
     *
     */
    resourceSubtype?: CustomFieldCompactResourceSubtypeEnum;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
    /**
     * *Conditional*. This string is the value of a `text` custom field.
     */
    textValue?: string;
    /**
     * *Deprecated: new integrations should prefer the resource_subtype field.* The type of the custom field. Must be one of the given values.
     *
     * @remarks
     *
     */
    type?: CustomFieldCompactTypeEnum;
}
