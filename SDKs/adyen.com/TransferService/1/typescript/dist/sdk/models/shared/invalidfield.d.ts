import { SpeakeasyBase } from "../../../internal/utils";
export declare class InvalidField extends SpeakeasyBase {
    /**
     * Description of the validation error.
     */
    message: string;
    /**
     * The field that has an invalid value.
     */
    name: string;
    /**
     * The invalid value.
     */
    value: string;
}
