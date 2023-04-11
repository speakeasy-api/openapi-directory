import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Custom field type
 */
export declare enum ShortCustomFieldFieldTypeEnum {
    Text = "text",
    Textarea = "textarea",
    Dropdown = "dropdown",
    Url = "url",
    Email = "email",
    Date = "date",
    DropdownLargeList = "dropdown_large_list"
}
export declare class ShortCustomField extends SpeakeasyBase {
    /**
     * Custom field type
     */
    fieldType: ShortCustomFieldFieldTypeEnum;
    /**
     * Custom field id
     */
    id: number;
    /**
     * Custom field name
     */
    name: string;
}
