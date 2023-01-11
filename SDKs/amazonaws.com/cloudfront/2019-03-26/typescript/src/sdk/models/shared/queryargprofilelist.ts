import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QueryArgProfileList
/** 
 * Query argument-profile mapping for field-level encryption.
**/
export class QueryArgProfileList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  profileId: string;

  @SpeakeasyMetadata()
  queryArg: string;
}
