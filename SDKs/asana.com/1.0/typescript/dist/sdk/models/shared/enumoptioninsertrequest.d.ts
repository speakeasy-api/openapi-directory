import { SpeakeasyBase } from "../../../internal/utils";
export declare class EnumOptionInsertRequest extends SpeakeasyBase {
    /**
     * An existing enum option within this custom field after which the new enum option should be inserted. Cannot be provided together with before_enum_option.
     */
    afterEnumOption?: string;
    /**
     * An existing enum option within this custom field before which the new enum option should be inserted. Cannot be provided together with after_enum_option.
     */
    beforeEnumOption?: string;
    /**
     * The gid of the enum option to relocate.
     */
    enumOption: string;
}
