import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ConnectorSettingTypeEnum {
    Text = "text",
    Checkbox = "checkbox",
    Tel = "tel",
    Email = "email",
    Url = "url",
    Textarea = "textarea",
    Select = "select",
    FilteredSelect = "filtered-select",
    MultiSelect = "multi-select",
    Datetime = "datetime",
    Date = "date",
    Time = "time",
    Number = "number",
    Password = "password"
}
export declare class ConnectorSetting extends SpeakeasyBase {
    id?: string;
    label?: string;
    type?: ConnectorSettingTypeEnum;
}
