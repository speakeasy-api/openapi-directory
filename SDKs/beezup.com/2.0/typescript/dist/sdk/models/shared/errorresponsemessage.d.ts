import { SpeakeasyBase } from "../../../internal/utils";
import { UserErrorMessage } from "./usererrormessage";
/**
 * Requested too many batch operations
 */
export declare class ErrorResponseMessage extends SpeakeasyBase {
    errors: UserErrorMessage[];
}
