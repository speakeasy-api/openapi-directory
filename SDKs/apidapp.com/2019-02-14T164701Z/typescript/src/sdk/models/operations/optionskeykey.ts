import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OptionsKeyKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;
}


export class OptionsKeyKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OptionsKeyKeyPathParams;
}


export class OptionsKeyKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Record<string, any>;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
