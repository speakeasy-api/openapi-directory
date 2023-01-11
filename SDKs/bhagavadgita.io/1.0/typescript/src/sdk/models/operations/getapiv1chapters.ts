import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetApiV1ChaptersLanguageEnum {
    Hi = "hi"
}


export class GetApiV1ChaptersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: GetApiV1ChaptersLanguageEnum;
}


export class GetApiV1ChaptersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiV1ChaptersQueryParams;
}


export class GetApiV1ChaptersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  chapterSchema?: shared.ChapterSchema;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
