import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration for a Lustre MDT (Metadata Target) storage volume. The metadata on Amazon File Cache is managed by a Lustre Metadata Server (MDS) while the actual metadata is persisted on an MDT.
 */
export declare class FileCacheLustreMetadataConfiguration extends SpeakeasyBase {
    storageCapacity: number;
}
