import { SpeakeasyBase } from "../../../internal/utils";
import { FieldConfig } from "./fieldconfig";
import { FormActionTypeEnum } from "./formactiontypeenum";
import { FormCTA } from "./formcta";
import { FormDataTypeConfig } from "./formdatatypeconfig";
import { FormStyle } from "./formstyle";
import { SectionalElement } from "./sectionalelement";
/**
 * Contains the configuration settings for a <code>Form</code> user interface (UI) element for an Amplify app. A form is a component you can add to your project by specifying a data source as the default configuration for the form.
 */
export declare class Form extends SpeakeasyBase {
    appId: string;
    cta?: FormCTA;
    dataType: FormDataTypeConfig;
    environmentName: string;
    fields: Record<string, FieldConfig>;
    formActionType: FormActionTypeEnum;
    id: string;
    name: string;
    schemaVersion: string;
    sectionalElements: Record<string, SectionalElement>;
    style: FormStyle;
    tags?: Record<string, string>;
}
