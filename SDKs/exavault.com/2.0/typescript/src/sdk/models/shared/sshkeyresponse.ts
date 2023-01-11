import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SshKey } from "./sshkey";
import { User } from "./user";



export class SshKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: SshKey;

  @SpeakeasyMetadata({ data: "json, name=included", elemType: User })
  included?: User[];

  @SpeakeasyMetadata({ data: "json, name=responseStatus" })
  responseStatus?: number;
}
