import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCollectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection" })
  collection: string;
}


export class GetCollectionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sharingKey" })
  sharingKey?: string;
}


export class GetCollectionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCollectionPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCollectionQueryParams;

  @SpeakeasyMetadata()
  security: GetCollectionSecurity;
}


export class GetCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  collection?: shared.Collection;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
