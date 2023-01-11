import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestProductQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=url" })
  url: string;
}


export class RequestProductRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RequestProductQueryParams;
}


export class RequestProductResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  productDetailsResponse?: shared.ProductDetailsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
