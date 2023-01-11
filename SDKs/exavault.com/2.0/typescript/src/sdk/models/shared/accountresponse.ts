import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { User } from "./user";



export class AccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Account;

  @SpeakeasyMetadata({ data: "json, name=included", elemType: User })
  included?: User[];

  @SpeakeasyMetadata({ data: "json, name=responseStatus" })
  responseStatus?: number;
}
