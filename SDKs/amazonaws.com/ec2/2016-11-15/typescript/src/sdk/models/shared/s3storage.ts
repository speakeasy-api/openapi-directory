import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3Storage
/** 
 * Describes the storage parameters for Amazon S3 and Amazon S3 buckets for an instance store-backed AMI.
**/
export class S3Storage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  awsAccessKeyId?: string;

  @SpeakeasyMetadata()
  bucket?: Record<string, any>;

  @SpeakeasyMetadata()
  prefix?: Record<string, any>;

  @SpeakeasyMetadata()
  uploadPolicy?: Record<string, any>;

  @SpeakeasyMetadata()
  uploadPolicySignature?: Record<string, any>;
}
