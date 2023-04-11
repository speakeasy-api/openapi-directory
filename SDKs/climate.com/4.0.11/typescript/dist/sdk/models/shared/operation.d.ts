import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Logical representation of an operation with a name and resource owner.
 */
export declare class Operation extends SpeakeasyBase {
    /**
     * Unique identifier for the operation.
     */
    id: string;
    /**
     * Name of the operation.
     */
    name: string;
    /**
     * Unique identifier of the resource owner that owns the Operation.
     */
    resourceOwnerId: string;
}
