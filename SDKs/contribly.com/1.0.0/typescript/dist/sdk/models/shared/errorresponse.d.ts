import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorField } from "./errorfield";
/**
 * The new assignment vailed to validate. Check the response body for details.
 */
export declare class ErrorResponse extends SpeakeasyBase {
    fields?: ErrorField[];
    message?: string;
}
