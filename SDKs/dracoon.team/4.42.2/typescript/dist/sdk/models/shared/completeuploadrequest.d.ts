import { SpeakeasyBase } from "../../../internal/utils";
import { FileKey } from "./filekey";
import { UserFileKeyList } from "./userfilekeylist";
/**
 * Node conflict resolution strategy:
 *
 * @remarks
 *
 * * `autorename`
 *
 * * `overwrite`
 *
 * * `fail`
 */
export declare enum CompleteUploadRequestResolutionStrategyEnum {
    Autorename = "autorename",
    Overwrite = "overwrite",
    Fail = "fail"
}
/**
 * The body must be empty if public upload token is used.
 *
 * @remarks
 *
 * The `resolutionStrategy` in that case will be always `autorename`
 */
export declare class CompleteUploadRequest extends SpeakeasyBase {
    /**
     * File key information
     */
    fileKey?: FileKey;
    /**
     * New file name to store with
     */
    fileName?: string;
    /**
     * Preserve Download Share Links and point them to the new node.
     */
    keepShareLinks?: boolean;
    /**
     * Node conflict resolution strategy:
     *
     * @remarks
     *
     * * `autorename`
     *
     * * `overwrite`
     *
     * * `fail`
     */
    resolutionStrategy?: CompleteUploadRequestResolutionStrategyEnum;
    /**
     * Mandatory for encrypted shares
     */
    userFileKeyList?: UserFileKeyList;
}
