import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrderIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId: number;

  @SpeakeasyMetadata({ data: "json, name=beezUPOrderId" })
  beezUPOrderId: string;

  @SpeakeasyMetadata({ data: "json, name=marketplaceTechnicalCode" })
  marketplaceTechnicalCode: string;
}
