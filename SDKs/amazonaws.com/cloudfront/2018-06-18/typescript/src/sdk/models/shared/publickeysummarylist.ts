import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PublicKeySummaryList
/** 
 *  Public key information summary. 
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
