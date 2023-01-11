import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrderIdentifierWithETag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId: number;

  @SpeakeasyMetadata({ data: "json, name=beezUPOrderId" })
  beezUPOrderId: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag: string;

  @SpeakeasyMetadata({ data: "json, name=marketplaceTechnicalCode" })
  marketplaceTechnicalCode: string;
}
