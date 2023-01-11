import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OptionsWalletAccountIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class OptionsWalletAccountIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OptionsWalletAccountIdPathParams;
}


export class OptionsWalletAccountIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Record<string, any>;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
