import { SpeakeasyBase } from "../../../internal/utils";
import { StorageUnitEnum } from "./storageunitenum";
/**
 * An object that represents the metadata and configuration settings for the NFS (Network File System) service on an Amazon Web Services Snow Family device.
 */
export declare class NFSOnDeviceServiceConfiguration extends SpeakeasyBase {
    storageLimit?: number;
    storageUnit?: StorageUnitEnum;
}
