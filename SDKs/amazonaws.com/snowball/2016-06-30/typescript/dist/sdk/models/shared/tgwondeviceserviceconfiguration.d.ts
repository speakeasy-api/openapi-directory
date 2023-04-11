import { SpeakeasyBase } from "../../../internal/utils";
import { StorageUnitEnum } from "./storageunitenum";
/**
 * An object that represents the metadata and configuration settings for the Storage Gateway service Tape Gateway type on an Amazon Web Services Snow Family device.
 */
export declare class TGWOnDeviceServiceConfiguration extends SpeakeasyBase {
    storageLimit?: number;
    storageUnit?: StorageUnitEnum;
}
