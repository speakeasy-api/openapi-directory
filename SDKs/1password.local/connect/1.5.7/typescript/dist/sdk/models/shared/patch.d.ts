import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PatchOpEnum {
    Add = "add",
    Remove = "remove",
    Replace = "replace"
}
export declare class Patch extends SpeakeasyBase {
    op: PatchOpEnum;
    /**
     * An RFC6901 JSON Pointer pointing to the Item document, an Item Attribute, and Item Field by Field ID, or an Item Field Attribute
     */
    path: string;
    value?: Record<string, any>;
}
