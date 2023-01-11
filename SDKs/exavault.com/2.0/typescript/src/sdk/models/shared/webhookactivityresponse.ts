import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebhookActivityEntry } from "./webhookactivityentry";



// WebhookActivityResponse
/** 
 * Session activity list response
**/
export class WebhookActivityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: WebhookActivityEntry })
  data?: WebhookActivityEntry[];

  @SpeakeasyMetadata({ data: "json, name=responseStatus" })
  responseStatus?: number;

  @SpeakeasyMetadata({ data: "json, name=returnedResults" })
  returnedResults?: number;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
