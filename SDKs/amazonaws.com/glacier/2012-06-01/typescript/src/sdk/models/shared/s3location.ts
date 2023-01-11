import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Grant } from "./grant";
import { CannedAclEnum } from "./cannedaclenum";
import { Encryption } from "./encryption";
import { StorageClassEnum } from "./storageclassenum";



// S3Location
/** 
 * Contains information about the location in Amazon S3 where the select job results are stored.
**/
export class S3Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessControlList", elemType: Grant })
  accessControlList?: Grant[];

  @SpeakeasyMetadata({ data: "json, name=BucketName" })
  bucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=CannedACL" })
  cannedACL?: CannedAclEnum;

  @SpeakeasyMetadata({ data: "json, name=Encryption" })
  encryption?: Encryption;

  @SpeakeasyMetadata({ data: "json, name=Prefix" })
  prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=StorageClass" })
  storageClass?: StorageClassEnum;

  @SpeakeasyMetadata({ data: "json, name=Tagging" })
  tagging?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=UserMetadata" })
  userMetadata?: Record<string, string>;
}
