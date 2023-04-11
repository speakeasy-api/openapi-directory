import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Forbidden
 */
export declare class ErrorMessage extends SpeakeasyBase {
    /**
     * A machine friendly error code, used by the dev team to identify the error.
     */
    code?: number;
    /**
     * A human friendly message explaining the error.
     */
    message?: string;
}
