import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Authentication error `auth-error`
 */
export declare class ErrorT extends SpeakeasyBase {
    detail?: string;
    error: number;
    title?: string;
    /**
     * unique uri for this error
     */
    type?: string;
}
