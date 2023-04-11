import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The instance operating system.
 */
export declare enum DescribeConversionTasksResultConversionTasksImportInstancePlatformEnum {
    Windows = "Windows"
}
/**
 * The disk image format.
 */
export declare enum DescribeConversionTasksResultConversionTasksImportInstanceVolumesImageFormatEnum {
    Vmdk = "VMDK",
    Raw = "RAW",
    Vhd = "VHD"
}
/**
 * The image.
 */
export declare class DescribeConversionTasksResultConversionTasksImportInstanceVolumesImage extends SpeakeasyBase {
    checksum?: string;
    format?: DescribeConversionTasksResultConversionTasksImportInstanceVolumesImageFormatEnum;
    importManifestUrl?: string;
    size?: number;
}
/**
 * The volume.
 */
export declare class DescribeConversionTasksResultConversionTasksImportInstanceVolumesVolume extends SpeakeasyBase {
    id?: string;
    size?: number;
}
/**
 * Describes an import volume task.
 */
export declare class DescribeConversionTasksResultConversionTasksImportInstanceVolumes extends SpeakeasyBase {
    availabilityZone?: string;
    bytesConverted?: number;
    description?: string;
    image?: DescribeConversionTasksResultConversionTasksImportInstanceVolumesImage;
    status?: string;
    statusMessage?: string;
    volume?: DescribeConversionTasksResultConversionTasksImportInstanceVolumesVolume;
}
/**
 * If the task is for importing an instance, this contains information about the import instance task.
 */
export declare class DescribeConversionTasksResultConversionTasksImportInstance extends SpeakeasyBase {
    description?: string;
    instanceId?: string;
    platform?: DescribeConversionTasksResultConversionTasksImportInstancePlatformEnum;
    volumes?: DescribeConversionTasksResultConversionTasksImportInstanceVolumes[];
}
/**
 * The disk image format.
 */
export declare enum DescribeConversionTasksResultConversionTasksImportVolumeImageFormatEnum {
    Vmdk = "VMDK",
    Raw = "RAW",
    Vhd = "VHD"
}
/**
 * The image.
 */
export declare class DescribeConversionTasksResultConversionTasksImportVolumeImage extends SpeakeasyBase {
    checksum?: string;
    format?: DescribeConversionTasksResultConversionTasksImportVolumeImageFormatEnum;
    importManifestUrl?: string;
    size?: number;
}
/**
 * The volume.
 */
export declare class DescribeConversionTasksResultConversionTasksImportVolumeVolume extends SpeakeasyBase {
    id?: string;
    size?: number;
}
/**
 * If the task is for importing a volume, this contains information about the import volume task.
 */
export declare class DescribeConversionTasksResultConversionTasksImportVolume extends SpeakeasyBase {
    availabilityZone?: string;
    bytesConverted?: number;
    description?: string;
    image?: DescribeConversionTasksResultConversionTasksImportVolumeImage;
    volume?: DescribeConversionTasksResultConversionTasksImportVolumeVolume;
}
/**
 * The state of the conversion task.
 */
export declare enum DescribeConversionTasksResultConversionTasksStateEnum {
    Active = "active",
    Cancelling = "cancelling",
    Cancelled = "cancelled",
    Completed = "completed"
}
/**
 * Describes a tag.
 */
export declare class DescribeConversionTasksResultConversionTasksTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a conversion task.
 */
export declare class DescribeConversionTasksResultConversionTasks extends SpeakeasyBase {
    conversionTaskId?: string;
    expirationTime?: string;
    importInstance?: DescribeConversionTasksResultConversionTasksImportInstance;
    importVolume?: DescribeConversionTasksResultConversionTasksImportVolume;
    state?: DescribeConversionTasksResultConversionTasksStateEnum;
    statusMessage?: string;
    tags?: DescribeConversionTasksResultConversionTasksTags[];
}
/**
 * Success
 */
export declare class DescribeConversionTasksResult extends SpeakeasyBase {
    conversionTasks?: DescribeConversionTasksResultConversionTasks[];
}
