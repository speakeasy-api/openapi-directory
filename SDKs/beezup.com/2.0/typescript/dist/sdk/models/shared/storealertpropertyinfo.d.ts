import { SpeakeasyBase } from "../../../internal/utils";
export declare class StoreAlertPropertyInfo extends SpeakeasyBase {
    /**
     * The property identifier of the alert
     */
    propertyId: number;
    /**
     * The property name of the alert
     */
    propertyName: string;
    /**
     * The regular expression related to the alert property
     */
    propertyValidationExpression?: string;
    /**
     * The property value
     */
    propertyValue: string;
}
