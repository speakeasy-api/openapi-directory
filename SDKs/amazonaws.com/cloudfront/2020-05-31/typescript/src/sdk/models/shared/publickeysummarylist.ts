import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PublicKeySummaryList
/** 
 * Contains information about a public key.
**/
export class PublicKeySummaryList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  comment?: string;

  @SpeakeasyMetadata()
  createdTime: Date;

  @SpeakeasyMetadata()
  encodedKey: string;

  @SpeakeasyMetadata()
  id: string;

  @SpeakeasyMetadata()
  name: string;
}
