import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OptionsTransactionHashReceiptPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=hash" })
  hash: string;
}


export class OptionsTransactionHashReceiptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OptionsTransactionHashReceiptPathParams;
}


export class OptionsTransactionHashReceiptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Record<string, any>;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
