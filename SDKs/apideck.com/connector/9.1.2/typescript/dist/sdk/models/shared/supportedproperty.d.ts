import { SpeakeasyBase } from "../../../internal/utils";
export declare class SupportedPropertyChildProperties extends SpeakeasyBase {
    unifiedProperty?: SupportedProperty;
}
export declare class SupportedProperty extends SpeakeasyBase {
    /**
     * List of child properties of the unified property.
     */
    childProperties?: SupportedPropertyChildProperties[];
    /**
     * Name of the property in our Unified API.
     */
    unifiedProperty?: string;
}
