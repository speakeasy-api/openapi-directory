import { SpeakeasyBase } from "../../../internal/utils";
import { ClientError } from "./clienterror";
/**
 * The request is malformed.
 */
export declare class ClientErrorResponse extends SpeakeasyBase {
    error?: ClientError;
}
