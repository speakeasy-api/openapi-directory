import { SpeakeasyBase } from "../../../internal/utils";
import { FormEntryField } from "./formentryfield";
export declare enum FormEntryAttributesStatusEnum {
    Pending = "pending",
    Completed = "completed"
}
export declare class FormEntryAttributes extends SpeakeasyBase {
    created?: Date;
    fields?: FormEntryField[];
    modified?: Date;
    paths?: string[];
    status?: FormEntryAttributesStatusEnum;
}
/**
 * Contains the data submitted for a form.
**/
export declare class FormEntry extends SpeakeasyBase {
    attributes?: FormEntryAttributes;
    id?: number;
    type?: string;
}
