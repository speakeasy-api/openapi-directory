import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The instance operating system.
 */
export declare enum ImportVolumeResultConversionTaskImportInstancePlatformEnum {
    Windows = "Windows"
}
/**
 * The disk image format.
 */
export declare enum ImportVolumeResultConversionTaskImportInstanceVolumesImageFormatEnum {
    Vmdk = "VMDK",
    Raw = "RAW",
    Vhd = "VHD"
}
/**
 * The image.
 */
export declare class ImportVolumeResultConversionTaskImportInstanceVolumesImage extends SpeakeasyBase {
    checksum?: string;
    format?: ImportVolumeResultConversionTaskImportInstanceVolumesImageFormatEnum;
    importManifestUrl?: string;
    size?: number;
}
/**
 * The volume.
 */
export declare class ImportVolumeResultConversionTaskImportInstanceVolumesVolume extends SpeakeasyBase {
    id?: string;
    size?: number;
}
/**
 * Describes an import volume task.
 */
export declare class ImportVolumeResultConversionTaskImportInstanceVolumes extends SpeakeasyBase {
    availabilityZone?: string;
    bytesConverted?: number;
    description?: string;
    image?: ImportVolumeResultConversionTaskImportInstanceVolumesImage;
    status?: string;
    statusMessage?: string;
    volume?: ImportVolumeResultConversionTaskImportInstanceVolumesVolume;
}
/**
 * If the task is for importing an instance, this contains information about the import instance task.
 */
export declare class ImportVolumeResultConversionTaskImportInstance extends SpeakeasyBase {
    description?: string;
    instanceId?: string;
    platform?: ImportVolumeResultConversionTaskImportInstancePlatformEnum;
    volumes?: ImportVolumeResultConversionTaskImportInstanceVolumes[];
}
/**
 * The disk image format.
 */
export declare enum ImportVolumeResultConversionTaskImportVolumeImageFormatEnum {
    Vmdk = "VMDK",
    Raw = "RAW",
    Vhd = "VHD"
}
/**
 * The image.
 */
export declare class ImportVolumeResultConversionTaskImportVolumeImage extends SpeakeasyBase {
    checksum?: string;
    format?: ImportVolumeResultConversionTaskImportVolumeImageFormatEnum;
    importManifestUrl?: string;
    size?: number;
}
/**
 * The volume.
 */
export declare class ImportVolumeResultConversionTaskImportVolumeVolume extends SpeakeasyBase {
    id?: string;
    size?: number;
}
/**
 * If the task is for importing a volume, this contains information about the import volume task.
 */
export declare class ImportVolumeResultConversionTaskImportVolume extends SpeakeasyBase {
    availabilityZone?: string;
    bytesConverted?: number;
    description?: string;
    image?: ImportVolumeResultConversionTaskImportVolumeImage;
    volume?: ImportVolumeResultConversionTaskImportVolumeVolume;
}
/**
 * The state of the conversion task.
 */
export declare enum ImportVolumeResultConversionTaskStateEnum {
    Active = "active",
    Cancelling = "cancelling",
    Cancelled = "cancelled",
    Completed = "completed"
}
/**
 * Describes a tag.
 */
export declare class ImportVolumeResultConversionTaskTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the conversion task.
 */
export declare class ImportVolumeResultConversionTask extends SpeakeasyBase {
    conversionTaskId?: string;
    expirationTime?: string;
    importInstance?: ImportVolumeResultConversionTaskImportInstance;
    importVolume?: ImportVolumeResultConversionTaskImportVolume;
    state?: ImportVolumeResultConversionTaskStateEnum;
    statusMessage?: string;
    tags?: ImportVolumeResultConversionTaskTags[];
}
/**
 * Success
 */
export declare class ImportVolumeResult extends SpeakeasyBase {
    conversionTask?: ImportVolumeResultConversionTask;
}
