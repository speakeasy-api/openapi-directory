import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for RollbackApiSpec.
 */
export declare class RollbackApiSpecRequest extends SpeakeasyBase {
    /**
     * Required. The spec being rolled back.
     */
    name: string;
    /**
     * Required. The revision ID to roll back to. It must be a revision of the same spec.   Example: c7cfa2a8
     */
    revisionId: string;
}
