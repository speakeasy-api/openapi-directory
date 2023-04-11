import { SpeakeasyBase } from "../../../internal/utils";
import { InvalidInputProperty } from "./invalidinputproperty";
/**
 * Input failed validation
 */
export declare class InvalidInputExceptionInfo extends SpeakeasyBase {
    exceptionClassName?: string;
    exceptionStack?: string[];
    message: string;
    validationErrors: InvalidInputProperty[];
}
