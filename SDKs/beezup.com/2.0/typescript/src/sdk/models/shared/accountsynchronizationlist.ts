import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountSynchronization } from "./accountsynchronization";



export class AccountSynchronizationList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountSynchronizations", elemType: AccountSynchronization })
  accountSynchronizations?: AccountSynchronization[];
}
