import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The disk image format.
 */
export declare enum DiskImageDetailFormatEnum {
    Vmdk = "VMDK",
    Raw = "RAW",
    Vhd = "VHD"
}
/**
 * Describes a disk image.
 */
export declare class DiskImageDetail extends SpeakeasyBase {
    bytes: number;
    format: DiskImageDetailFormatEnum;
    importManifestUrl: string;
}
