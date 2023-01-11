import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3ReferenceDataSourceDescription
/** 
 * Provides the bucket name and object key name that stores the reference data.
**/
export class S3ReferenceDataSourceDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BucketARN" })
  bucketARN: string;

  @SpeakeasyMetadata({ data: "json, name=FileKey" })
  fileKey: string;

  @SpeakeasyMetadata({ data: "json, name=ReferenceRoleARN" })
  referenceRoleARN: string;
}
