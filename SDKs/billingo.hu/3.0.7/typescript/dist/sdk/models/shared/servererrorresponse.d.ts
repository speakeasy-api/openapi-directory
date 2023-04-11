import { SpeakeasyBase } from "../../../internal/utils";
import { ServerError } from "./servererror";
/**
 * Internal server error.
 */
export declare class ServerErrorResponse extends SpeakeasyBase {
    error?: ServerError;
}
