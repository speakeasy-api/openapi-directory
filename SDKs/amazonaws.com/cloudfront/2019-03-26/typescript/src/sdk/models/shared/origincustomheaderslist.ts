import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OriginCustomHeadersList
/** 
 * A complex type that contains <code>HeaderName</code> and <code>HeaderValue</code> elements, if any, for this distribution. 
**/
export class OriginCustomHeadersList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headerName: string;

  @SpeakeasyMetadata()
  headerValue: string;
}
