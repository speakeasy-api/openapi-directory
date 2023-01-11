import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SessionActivityEntry } from "./sessionactivityentry";



// SessionActivityResponse
/** 
 * Session activity list response
**/
export class SessionActivityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: SessionActivityEntry })
  data?: SessionActivityEntry[];

  @SpeakeasyMetadata({ data: "json, name=responseStatus" })
  responseStatus?: number;

  @SpeakeasyMetadata({ data: "json, name=returnedResults" })
  returnedResults?: number;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
