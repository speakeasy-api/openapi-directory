import { SpeakeasyBase } from "../../../internal/utils";
/**
 * If the task is for importing an instance, this contains information about the import instance task.
**/
export declare class ImportVolumeResultConversionTaskImportInstance extends SpeakeasyBase {
    description?: Record<string, any>;
    instanceId?: Record<string, any>;
    platform?: Record<string, any>;
    volumes?: Record<string, any>;
}
/**
 * The image.
**/
export declare class ImportVolumeResultConversionTaskImportVolumeImage extends SpeakeasyBase {
    checksum?: Record<string, any>;
    format?: Record<string, any>;
    importManifestUrl?: Record<string, any>;
    size?: Record<string, any>;
}
/**
 * The volume.
**/
export declare class ImportVolumeResultConversionTaskImportVolumeVolume extends SpeakeasyBase {
    id?: Record<string, any>;
    size?: Record<string, any>;
}
/**
 * If the task is for importing a volume, this contains information about the import volume task.
**/
export declare class ImportVolumeResultConversionTaskImportVolume extends SpeakeasyBase {
    availabilityZone?: Record<string, any>;
    bytesConverted?: Record<string, any>;
    description?: Record<string, any>;
    image?: ImportVolumeResultConversionTaskImportVolumeImage;
    volume?: ImportVolumeResultConversionTaskImportVolumeVolume;
}
/**
 * Information about the conversion task.
**/
export declare class ImportVolumeResultConversionTask extends SpeakeasyBase {
    conversionTaskId?: Record<string, any>;
    expirationTime?: Record<string, any>;
    importInstance?: ImportVolumeResultConversionTaskImportInstance;
    importVolume?: ImportVolumeResultConversionTaskImportVolume;
    state?: Record<string, any>;
    statusMessage?: Record<string, any>;
    tags?: Record<string, any>;
}
export declare class ImportVolumeResult extends SpeakeasyBase {
    conversionTask?: ImportVolumeResultConversionTask;
}
