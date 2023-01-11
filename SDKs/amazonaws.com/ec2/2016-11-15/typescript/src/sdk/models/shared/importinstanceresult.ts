import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImportInstanceResultConversionTaskImportInstance
/** 
 * If the task is for importing an instance, this contains information about the import instance task.
**/
export class ImportInstanceResultConversionTaskImportInstance extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: Record<string, any>;

  @SpeakeasyMetadata()
  instanceId?: Record<string, any>;

  @SpeakeasyMetadata()
  platform?: Record<string, any>;

  @SpeakeasyMetadata()
  volumes?: Record<string, any>;
}


// ImportInstanceResultConversionTaskImportVolumeImage
/** 
 * The image.
**/
export class ImportInstanceResultConversionTaskImportVolumeImage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  checksum?: Record<string, any>;

  @SpeakeasyMetadata()
  format?: Record<string, any>;

  @SpeakeasyMetadata()
  importManifestUrl?: Record<string, any>;

  @SpeakeasyMetadata()
  size?: Record<string, any>;
}


// ImportInstanceResultConversionTaskImportVolumeVolume
/** 
 * The volume.
**/
export class ImportInstanceResultConversionTaskImportVolumeVolume extends SpeakeasyBase {
  @SpeakeasyMetadata()
  id?: Record<string, any>;

  @SpeakeasyMetadata()
  size?: Record<string, any>;
}


// ImportInstanceResultConversionTaskImportVolume
/** 
 * If the task is for importing a volume, this contains information about the import volume task.
**/
export class ImportInstanceResultConversionTaskImportVolume extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityZone?: Record<string, any>;

  @SpeakeasyMetadata()
  bytesConverted?: Record<string, any>;

  @SpeakeasyMetadata()
  description?: Record<string, any>;

  @SpeakeasyMetadata()
  image?: ImportInstanceResultConversionTaskImportVolumeImage;

  @SpeakeasyMetadata()
  volume?: ImportInstanceResultConversionTaskImportVolumeVolume;
}


// ImportInstanceResultConversionTask
/** 
 * Information about the conversion task.
**/
export class ImportInstanceResultConversionTask extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conversionTaskId?: Record<string, any>;

  @SpeakeasyMetadata()
  expirationTime?: Record<string, any>;

  @SpeakeasyMetadata()
  importInstance?: ImportInstanceResultConversionTaskImportInstance;

  @SpeakeasyMetadata()
  importVolume?: ImportInstanceResultConversionTaskImportVolume;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  statusMessage?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;
}


export class ImportInstanceResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conversionTask?: ImportInstanceResultConversionTask;
}
