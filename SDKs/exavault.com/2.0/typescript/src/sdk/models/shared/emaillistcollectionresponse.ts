import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EmailList } from "./emaillist";
import { User } from "./user";



// EmailListCollectionResponse
/** 
 * Response object for list of email lists
**/
export class EmailListCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: EmailList })
  data?: EmailList[];

  @SpeakeasyMetadata({ data: "json, name=included", elemType: User })
  included?: User[];

  @SpeakeasyMetadata({ data: "json, name=responseStatus" })
  responseStatus?: number;

  @SpeakeasyMetadata({ data: "json, name=returnedResults" })
  returnedResults?: number;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
