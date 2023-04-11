import { SpeakeasyBase } from "../../../internal/utils";
import { MagneticStoreRejectedDataLocation } from "./magneticstorerejecteddatalocation";
/**
 * The set of properties on a table for configuring magnetic store writes.
 */
export declare class MagneticStoreWriteProperties extends SpeakeasyBase {
    enableMagneticStoreWrites: boolean;
    magneticStoreRejectedDataLocation?: MagneticStoreRejectedDataLocation;
}
