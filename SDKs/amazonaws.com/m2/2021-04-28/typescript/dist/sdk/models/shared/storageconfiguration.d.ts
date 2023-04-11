import { SpeakeasyBase } from "../../../internal/utils";
import { EfsStorageConfiguration } from "./efsstorageconfiguration";
import { FsxStorageConfiguration } from "./fsxstorageconfiguration";
/**
 * Defines the storage configuration for a runtime environment.
 */
export declare class StorageConfiguration extends SpeakeasyBase {
    efs?: EfsStorageConfiguration;
    fsx?: FsxStorageConfiguration;
}
