import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the storage configuration for an Amazon EFS file system.
 */
export declare class EfsStorageConfiguration extends SpeakeasyBase {
    fileSystemId: string;
    mountPoint: string;
}
