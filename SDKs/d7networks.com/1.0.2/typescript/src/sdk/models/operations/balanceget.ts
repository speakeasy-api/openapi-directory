import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BalanceGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  balanceGet500ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
