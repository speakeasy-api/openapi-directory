import { SpeakeasyBase } from "../../../internal/utils";
import { FormField } from "./formfield";
import { Tag } from "./tag";
/**
 * Form object to be created
 */
export declare class FormSubmission extends SpeakeasyBase {
    callToAction?: string;
    cssUrl?: string;
    fields?: FormField[];
    heading?: string;
    name?: string;
    noCss?: boolean;
    tags?: Tag[];
}
