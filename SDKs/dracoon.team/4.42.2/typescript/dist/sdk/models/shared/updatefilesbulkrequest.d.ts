import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectExpiration } from "./objectexpiration";
/**
 * Request model for updating files
 */
export declare class UpdateFilesBulkRequest extends SpeakeasyBase {
    /**
     * Classification ID:
     *
     * @remarks
     *
     * * `1` - public
     *
     * * `2` - internal
     *
     * * `3` - confidential
     *
     * * `4` - strictly confidential
     */
    classification?: number;
    /**
     * Expiration information
     */
    expiration?: ObjectExpiration;
    /**
     * List of ids
     */
    objectIds: number[];
}
