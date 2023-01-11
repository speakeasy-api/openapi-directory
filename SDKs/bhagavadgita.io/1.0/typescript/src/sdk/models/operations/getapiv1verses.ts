import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetApiV1VersesLanguageEnum {
    Hi = "hi"
}


export class GetApiV1VersesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: GetApiV1VersesLanguageEnum;
}


export class GetApiV1VersesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiV1VersesQueryParams;
}


export class GetApiV1VersesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  verseSchema?: shared.VerseSchema;
}
