import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
import { Account } from "./account";
import { Resource } from "./resource";



export class UserCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: User })
  data?: User[];

  @SpeakeasyMetadata({ data: "json, name=included" })
  included?: any[];

  @SpeakeasyMetadata({ data: "json, name=responseStatus" })
  responseStatus?: number;

  @SpeakeasyMetadata({ data: "json, name=returnedResults" })
  returnedResults?: number;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
