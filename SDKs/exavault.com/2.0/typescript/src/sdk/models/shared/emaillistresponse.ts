import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EmailList } from "./emaillist";
import { User } from "./user";



// EmailListResponse
/** 
 * Response object for a single email list.
**/
export class EmailListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: EmailList;

  @SpeakeasyMetadata({ data: "json, name=included", elemType: User })
  included?: User[];

  @SpeakeasyMetadata({ data: "json, name=responseStatus" })
  responseStatus?: number;
}
