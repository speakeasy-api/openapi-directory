import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Hit
/** 
 * Information about a document that matches the search request.
**/
export class Hit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exprs" })
  exprs?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: Record<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=highlights" })
  highlights?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
