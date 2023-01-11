import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudFrontOriginAccessIdentitySummaryList
/** 
 * Summary of the information about a CloudFront origin access identity.
**/
export class CloudFrontOriginAccessIdentitySummaryList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  comment: string;

  @SpeakeasyMetadata()
  id: string;

  @SpeakeasyMetadata()
  s3CanonicalUserId: string;
}
