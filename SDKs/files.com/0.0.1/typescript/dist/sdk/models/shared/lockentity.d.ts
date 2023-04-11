import { SpeakeasyBase } from "../../../internal/utils";
/**
 * List Locks by path
 */
export declare class LockEntity extends SpeakeasyBase {
    /**
     * Can lock be modified by users other than its creator?
     */
    allowAccessByAnyUser?: boolean;
    /**
     * DEPRECATED: Lock depth
     */
    depth?: string;
    /**
     * Is lock exclusive?
     */
    exclusive?: boolean;
    /**
     * Owner of the lock.  This can be any arbitrary string.
     */
    owner?: string;
    /**
     * Path
     */
    path?: string;
    /**
     * Does lock apply to subfolders?
     */
    recursive?: boolean;
    /**
     * DEPRECATED: Lock scope
     */
    scope?: string;
    /**
     * Lock timeout in seconds
     */
    timeout?: number;
    /**
     * Lock token.  Use to release lock.
     */
    token?: string;
    /**
     * DEPRECATED: Lock type
     */
    type?: string;
    /**
     * Lock creator user ID
     */
    userId?: number;
    /**
     * Lock creator username
     */
    username?: string;
}
