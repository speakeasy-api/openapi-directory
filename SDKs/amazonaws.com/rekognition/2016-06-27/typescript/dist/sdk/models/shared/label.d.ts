import { SpeakeasyBase } from "../../../internal/utils";
import { Instance } from "./instance";
import { LabelAlias } from "./labelalias";
import { LabelCategory } from "./labelcategory";
import { Parent } from "./parent";
/**
 * <p>Structure containing details about the detected label, including the name, detected instances, parent labels, and level of confidence.</p> <p> </p>
 */
export declare class Label extends SpeakeasyBase {
    aliases?: LabelAlias[];
    categories?: LabelCategory[];
    confidence?: number;
    instances?: Instance[];
    name?: string;
    parents?: Parent[];
}
