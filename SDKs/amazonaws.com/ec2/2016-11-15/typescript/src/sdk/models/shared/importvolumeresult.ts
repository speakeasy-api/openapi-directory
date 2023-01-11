import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImportVolumeResultConversionTaskImportInstance
/** 
 * If the task is for importing an instance, this contains information about the import instance task.
**/
export class ImportVolumeResultConversionTaskImportInstance extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: Record<string, any>;

  @SpeakeasyMetadata()
  instanceId?: Record<string, any>;

  @SpeakeasyMetadata()
  platform?: Record<string, any>;

  @SpeakeasyMetadata()
  volumes?: Record<string, any>;
}


// ImportVolumeResultConversionTaskImportVolumeImage
/** 
 * The image.
**/
export class ImportVolumeResultConversionTaskImportVolumeImage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  checksum?: Record<string, any>;

  @SpeakeasyMetadata()
  format?: Record<string, any>;

  @SpeakeasyMetadata()
  importManifestUrl?: Record<string, any>;

  @SpeakeasyMetadata()
  size?: Record<string, any>;
}


// ImportVolumeResultConversionTaskImportVolumeVolume
/** 
 * The volume.
**/
export class ImportVolumeResultConversionTaskImportVolumeVolume extends SpeakeasyBase {
  @SpeakeasyMetadata()
  id?: Record<string, any>;

  @SpeakeasyMetadata()
  size?: Record<string, any>;
}


// ImportVolumeResultConversionTaskImportVolume
/** 
 * If the task is for importing a volume, this contains information about the import volume task.
**/
export class ImportVolumeResultConversionTaskImportVolume extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityZone?: Record<string, any>;

  @SpeakeasyMetadata()
  bytesConverted?: Record<string, any>;

  @SpeakeasyMetadata()
  description?: Record<string, any>;

  @SpeakeasyMetadata()
  image?: ImportVolumeResultConversionTaskImportVolumeImage;

  @SpeakeasyMetadata()
  volume?: ImportVolumeResultConversionTaskImportVolumeVolume;
}


// ImportVolumeResultConversionTask
/** 
 * Information about the conversion task.
**/
export class ImportVolumeResultConversionTask extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conversionTaskId?: Record<string, any>;

  @SpeakeasyMetadata()
  expirationTime?: Record<string, any>;

  @SpeakeasyMetadata()
  importInstance?: ImportVolumeResultConversionTaskImportInstance;

  @SpeakeasyMetadata()
  importVolume?: ImportVolumeResultConversionTaskImportVolume;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  statusMessage?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;
}


export class ImportVolumeResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conversionTask?: ImportVolumeResultConversionTask;
}
