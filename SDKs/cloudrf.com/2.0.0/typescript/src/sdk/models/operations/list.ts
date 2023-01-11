import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=e" })
  e?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=n" })
  n?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=s" })
  s?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=w" })
  w?: number;
}


export class ListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class ListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListQueryParams;

  @SpeakeasyMetadata()
  security: ListSecurity;
}


export class ListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
