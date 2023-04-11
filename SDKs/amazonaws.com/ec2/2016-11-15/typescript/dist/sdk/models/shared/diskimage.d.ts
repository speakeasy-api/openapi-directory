import { SpeakeasyBase } from "../../../internal/utils";
import { DiskImageDetail } from "./diskimagedetail";
import { VolumeDetail } from "./volumedetail";
/**
 * Describes a disk image.
 */
export declare class DiskImage extends SpeakeasyBase {
    description?: string;
    image?: DiskImageDetail;
    volume?: VolumeDetail;
}
