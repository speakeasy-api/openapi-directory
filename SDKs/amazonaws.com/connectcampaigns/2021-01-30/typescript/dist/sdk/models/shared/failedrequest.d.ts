import { SpeakeasyBase } from "../../../internal/utils";
import { FailureCodeEnum } from "./failurecodeenum";
/**
 * A failed request identified by the unique client token.
 */
export declare class FailedRequest extends SpeakeasyBase {
    /**
     * Client provided parameter used for idempotency. Its value must be unique for each request.
     */
    clientToken?: string;
    /**
     * A predefined code indicating the error that caused the failure.
     */
    failureCode?: FailureCodeEnum;
    /**
     * Identifier representing a Dial request
     */
    id?: string;
}
