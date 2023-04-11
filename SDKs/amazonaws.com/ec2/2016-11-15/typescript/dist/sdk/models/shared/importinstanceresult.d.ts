import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The instance operating system.
 */
export declare enum ImportInstanceResultConversionTaskImportInstancePlatformEnum {
    Windows = "Windows"
}
/**
 * The disk image format.
 */
export declare enum ImportInstanceResultConversionTaskImportInstanceVolumesImageFormatEnum {
    Vmdk = "VMDK",
    Raw = "RAW",
    Vhd = "VHD"
}
/**
 * The image.
 */
export declare class ImportInstanceResultConversionTaskImportInstanceVolumesImage extends SpeakeasyBase {
    checksum?: string;
    format?: ImportInstanceResultConversionTaskImportInstanceVolumesImageFormatEnum;
    importManifestUrl?: string;
    size?: number;
}
/**
 * The volume.
 */
export declare class ImportInstanceResultConversionTaskImportInstanceVolumesVolume extends SpeakeasyBase {
    id?: string;
    size?: number;
}
/**
 * Describes an import volume task.
 */
export declare class ImportInstanceResultConversionTaskImportInstanceVolumes extends SpeakeasyBase {
    availabilityZone?: string;
    bytesConverted?: number;
    description?: string;
    image?: ImportInstanceResultConversionTaskImportInstanceVolumesImage;
    status?: string;
    statusMessage?: string;
    volume?: ImportInstanceResultConversionTaskImportInstanceVolumesVolume;
}
/**
 * If the task is for importing an instance, this contains information about the import instance task.
 */
export declare class ImportInstanceResultConversionTaskImportInstance extends SpeakeasyBase {
    description?: string;
    instanceId?: string;
    platform?: ImportInstanceResultConversionTaskImportInstancePlatformEnum;
    volumes?: ImportInstanceResultConversionTaskImportInstanceVolumes[];
}
/**
 * The disk image format.
 */
export declare enum ImportInstanceResultConversionTaskImportVolumeImageFormatEnum {
    Vmdk = "VMDK",
    Raw = "RAW",
    Vhd = "VHD"
}
/**
 * The image.
 */
export declare class ImportInstanceResultConversionTaskImportVolumeImage extends SpeakeasyBase {
    checksum?: string;
    format?: ImportInstanceResultConversionTaskImportVolumeImageFormatEnum;
    importManifestUrl?: string;
    size?: number;
}
/**
 * The volume.
 */
export declare class ImportInstanceResultConversionTaskImportVolumeVolume extends SpeakeasyBase {
    id?: string;
    size?: number;
}
/**
 * If the task is for importing a volume, this contains information about the import volume task.
 */
export declare class ImportInstanceResultConversionTaskImportVolume extends SpeakeasyBase {
    availabilityZone?: string;
    bytesConverted?: number;
    description?: string;
    image?: ImportInstanceResultConversionTaskImportVolumeImage;
    volume?: ImportInstanceResultConversionTaskImportVolumeVolume;
}
/**
 * The state of the conversion task.
 */
export declare enum ImportInstanceResultConversionTaskStateEnum {
    Active = "active",
    Cancelling = "cancelling",
    Cancelled = "cancelled",
    Completed = "completed"
}
/**
 * Describes a tag.
 */
export declare class ImportInstanceResultConversionTaskTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the conversion task.
 */
export declare class ImportInstanceResultConversionTask extends SpeakeasyBase {
    conversionTaskId?: string;
    expirationTime?: string;
    importInstance?: ImportInstanceResultConversionTaskImportInstance;
    importVolume?: ImportInstanceResultConversionTaskImportVolume;
    state?: ImportInstanceResultConversionTaskStateEnum;
    statusMessage?: string;
    tags?: ImportInstanceResultConversionTaskTags[];
}
/**
 * Success
 */
export declare class ImportInstanceResult extends SpeakeasyBase {
    conversionTask?: ImportInstanceResultConversionTask;
}
