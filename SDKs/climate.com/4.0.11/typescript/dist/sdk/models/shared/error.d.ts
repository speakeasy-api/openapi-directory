import { SpeakeasyBase } from "../../../internal/utils";
export declare class ErrorError extends SpeakeasyBase {
    code: string;
    id: string;
    /**
     * Description of the error encountered.
     */
    message: string;
}
/**
 * Bad Input
 */
export declare class ErrorT extends SpeakeasyBase {
    error?: ErrorError;
}
