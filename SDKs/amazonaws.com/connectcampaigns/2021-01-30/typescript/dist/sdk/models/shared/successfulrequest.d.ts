import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A successful request identified by the unique client token.
 */
export declare class SuccessfulRequest extends SpeakeasyBase {
    /**
     * Client provided parameter used for idempotency. Its value must be unique for each request.
     */
    clientToken?: string;
    /**
     * Identifier representing a Dial request
     */
    id?: string;
}
