import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Bucket } from "./bucket";



export class BucketInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buckets", elemType: Bucket })
  buckets?: Bucket[];
}
