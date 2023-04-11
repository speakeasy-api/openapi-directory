import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The disk image format.
 */
export declare enum ImportVolumeRequestImageFormatEnum {
    Vmdk = "VMDK",
    Raw = "RAW",
    Vhd = "VHD"
}
/**
 * The disk image.
 */
export declare class ImportVolumeRequestImage extends SpeakeasyBase {
    bytes: number;
    format: ImportVolumeRequestImageFormatEnum;
    importManifestUrl: string;
}
/**
 * The volume size.
 */
export declare class ImportVolumeRequestVolume extends SpeakeasyBase {
    size: number;
}
export declare class ImportVolumeRequest extends SpeakeasyBase {
    availabilityZone: string;
    description?: string;
    dryRun?: boolean;
    image: ImportVolumeRequestImage;
    volume: ImportVolumeRequestVolume;
}
