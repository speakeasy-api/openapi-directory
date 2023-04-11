import { SpeakeasyBase } from "../../../internal/utils";
export declare class AddCustomFieldSettingRequest extends SpeakeasyBase {
    /**
     * The custom field to associate with this container.
     */
    customField: string;
    /**
     * A gid of a Custom Field Setting on this container, after which the new Custom Field Setting will be added.  `insert_before` and `insert_after` parameters cannot both be specified.
     */
    insertAfter?: string;
    /**
     * A gid of a Custom Field Setting on this container, before which the new Custom Field Setting will be added.  `insert_before` and `insert_after` parameters cannot both be specified.
     */
    insertBefore?: string;
    /**
     * Whether this field should be considered important to this container (for instance, to display in the list view of items in the container).
     */
    isImportant?: boolean;
}
