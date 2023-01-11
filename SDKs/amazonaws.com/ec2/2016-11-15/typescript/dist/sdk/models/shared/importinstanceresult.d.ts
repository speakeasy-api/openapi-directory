import { SpeakeasyBase } from "../../../internal/utils";
/**
 * If the task is for importing an instance, this contains information about the import instance task.
**/
export declare class ImportInstanceResultConversionTaskImportInstance extends SpeakeasyBase {
    description?: Record<string, any>;
    instanceId?: Record<string, any>;
    platform?: Record<string, any>;
    volumes?: Record<string, any>;
}
/**
 * The image.
**/
export declare class ImportInstanceResultConversionTaskImportVolumeImage extends SpeakeasyBase {
    checksum?: Record<string, any>;
    format?: Record<string, any>;
    importManifestUrl?: Record<string, any>;
    size?: Record<string, any>;
}
/**
 * The volume.
**/
export declare class ImportInstanceResultConversionTaskImportVolumeVolume extends SpeakeasyBase {
    id?: Record<string, any>;
    size?: Record<string, any>;
}
/**
 * If the task is for importing a volume, this contains information about the import volume task.
**/
export declare class ImportInstanceResultConversionTaskImportVolume extends SpeakeasyBase {
    availabilityZone?: Record<string, any>;
    bytesConverted?: Record<string, any>;
    description?: Record<string, any>;
    image?: ImportInstanceResultConversionTaskImportVolumeImage;
    volume?: ImportInstanceResultConversionTaskImportVolumeVolume;
}
/**
 * Information about the conversion task.
**/
export declare class ImportInstanceResultConversionTask extends SpeakeasyBase {
    conversionTaskId?: Record<string, any>;
    expirationTime?: Record<string, any>;
    importInstance?: ImportInstanceResultConversionTaskImportInstance;
    importVolume?: ImportInstanceResultConversionTaskImportVolume;
    state?: Record<string, any>;
    statusMessage?: Record<string, any>;
    tags?: Record<string, any>;
}
export declare class ImportInstanceResult extends SpeakeasyBase {
    conversionTask?: ImportInstanceResultConversionTask;
}
