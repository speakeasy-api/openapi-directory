import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Invalid or missing token
 */
export declare class ErrorResponse extends SpeakeasyBase {
    /**
     * A message detailing the error
     */
    message?: string;
    /**
     * HTTP Status Code
     */
    status?: number;
}
