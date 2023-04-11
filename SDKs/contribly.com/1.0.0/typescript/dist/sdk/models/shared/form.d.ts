import { SpeakeasyBase } from "../../../internal/utils";
import { FormField } from "./formfield";
import { Tag } from "./tag";
/**
 * Form created
 */
export declare class Form extends SpeakeasyBase {
    callToAction?: string;
    cssUrl?: string;
    fields?: FormField[];
    heading?: string;
    id?: string;
    name?: string;
    noCss?: boolean;
    ownedBy?: string;
    tags?: Tag[];
}
