import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EmailListAttributes } from "./emaillistattributes";
import { EmailListRelationships } from "./emaillistrelationships";



// EmailList
/** 
 * A single email group list
**/
export class EmailList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: EmailListAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships?: EmailListRelationships;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
