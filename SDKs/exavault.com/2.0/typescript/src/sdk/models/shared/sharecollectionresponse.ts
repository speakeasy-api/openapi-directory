import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Share } from "./share";
import { User } from "./user";
import { Notification } from "./notification";
import { Resource } from "./resource";



export class ShareCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Share })
  data?: Share[];

  @SpeakeasyMetadata({ data: "json, name=included" })
  included?: any[];

  @SpeakeasyMetadata({ data: "json, name=responseStatus" })
  responseStatus?: number;

  @SpeakeasyMetadata({ data: "json, name=returnedResults" })
  returnedResults?: number;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
