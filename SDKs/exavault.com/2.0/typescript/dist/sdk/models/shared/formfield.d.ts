import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Advanced field settings
**/
export declare class FormFieldSettings extends SpeakeasyBase {
    description?: string;
    isRequired?: boolean;
    senderEmail?: boolean;
    useAsFolderName?: boolean;
    width?: number;
}
export declare class FormField extends SpeakeasyBase {
    id?: number;
    name?: string;
    order?: number;
    settings?: FormFieldSettings;
    type?: any;
}
