import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV1ChaptersChapterNumberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chapter_number" })
  chapterNumber: number;
}

export enum GetApiV1ChaptersChapterNumberLanguageEnum {
    Hi = "hi"
}


export class GetApiV1ChaptersChapterNumberQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: GetApiV1ChaptersChapterNumberLanguageEnum;
}


export class GetApiV1ChaptersChapterNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiV1ChaptersChapterNumberPathParams;

  @SpeakeasyMetadata()
  queryParams: GetApiV1ChaptersChapterNumberQueryParams;
}


export class GetApiV1ChaptersChapterNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  chapterSchema?: shared.ChapterSchema;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
