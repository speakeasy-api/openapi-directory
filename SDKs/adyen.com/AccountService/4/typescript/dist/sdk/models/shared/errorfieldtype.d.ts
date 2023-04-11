import { SpeakeasyBase } from "../../../internal/utils";
import { FieldType } from "./fieldtype";
export declare class ErrorFieldType extends SpeakeasyBase {
    /**
     * The validation error code.
     */
    errorCode?: number;
    /**
     * A description of the validation error.
     */
    errorDescription?: string;
    fieldType?: FieldType;
}
