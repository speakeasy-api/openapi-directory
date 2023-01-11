import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BaseListing } from "./baselisting";



// SearchResponse
/** 
 * Search query response
**/
export class SearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=facets" })
  facets?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=listings", elemType: BaseListing })
  listings?: BaseListing[];

  @SpeakeasyMetadata({ data: "json, name=num_found" })
  numFound?: number;

  @SpeakeasyMetadata({ data: "json, name=range_facets" })
  rangeFacets?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=stats" })
  stats?: Record<string, any>;
}
