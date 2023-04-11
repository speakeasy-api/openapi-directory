import { SpeakeasyBase } from "../../../internal/utils";
export declare class SectionRequest extends SpeakeasyBase {
    /**
     * An existing section within this project after which the added section should be inserted. Cannot be provided together with insert_before.
     */
    insertAfter?: string;
    /**
     * An existing section within this project before which the added section should be inserted. Cannot be provided together with insert_after.
     */
    insertBefore?: string;
    /**
     * The text to be displayed as the section name. This cannot be an empty string.
     */
    name: string;
}
