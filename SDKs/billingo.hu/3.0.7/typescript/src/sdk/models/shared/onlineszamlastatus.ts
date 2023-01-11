import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OnlineSzamlaStatusMessage } from "./onlineszamlastatusmessage";



export class OnlineSzamlaStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messages", elemType: OnlineSzamlaStatusMessage })
  messages?: OnlineSzamlaStatusMessage[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=transaction_id" })
  transactionId?: string;
}
