import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueryArgProfileList } from "./queryargprofilelist";



// QueryArgProfiles
/** 
 * Query argument-profile mapping for field-level encryption.
**/
export class QueryArgProfiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: QueryArgProfileList })
  items?: QueryArgProfileList[];

  @SpeakeasyMetadata()
  quantity: number;
}
