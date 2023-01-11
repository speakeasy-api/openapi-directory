import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SshKey } from "./sshkey";
import { User } from "./user";



export class SshKeyCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: SshKey })
  data?: SshKey[];

  @SpeakeasyMetadata({ data: "json, name=included", elemType: User })
  included?: User[];

  @SpeakeasyMetadata({ data: "json, name=responseStatus" })
  responseStatus?: number;

  @SpeakeasyMetadata({ data: "json, name=returnedResults" })
  returnedResults?: number;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
