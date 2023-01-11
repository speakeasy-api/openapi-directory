import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExportImageResultS3ExportLocation
/** 
 * Information about the destination Amazon S3 bucket.
**/
export class ExportImageResultS3ExportLocation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  s3Bucket?: Record<string, any>;

  @SpeakeasyMetadata()
  s3Prefix?: Record<string, any>;
}


export class ExportImageResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: Record<string, any>;

  @SpeakeasyMetadata()
  diskImageFormat?: Record<string, any>;

  @SpeakeasyMetadata()
  exportImageTaskId?: Record<string, any>;

  @SpeakeasyMetadata()
  imageId?: Record<string, any>;

  @SpeakeasyMetadata()
  progress?: Record<string, any>;

  @SpeakeasyMetadata()
  roleName?: Record<string, any>;

  @SpeakeasyMetadata()
  s3ExportLocation?: ExportImageResultS3ExportLocation;

  @SpeakeasyMetadata()
  status?: Record<string, any>;

  @SpeakeasyMetadata()
  statusMessage?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;
}
