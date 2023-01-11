import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OptionsErc20AddressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class OptionsErc20AddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OptionsErc20AddressPathParams;
}


export class OptionsErc20AddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Record<string, any>;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
