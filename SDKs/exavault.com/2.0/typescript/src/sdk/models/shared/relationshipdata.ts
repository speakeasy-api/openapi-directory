import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RelationshipData
/** 
 * Identifying info for related record
**/
export class RelationshipData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
