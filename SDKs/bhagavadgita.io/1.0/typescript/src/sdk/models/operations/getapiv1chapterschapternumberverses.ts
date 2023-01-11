import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV1ChaptersChapterNumberVersesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chapter_number" })
  chapterNumber: number;
}

export enum GetApiV1ChaptersChapterNumberVersesLanguageEnum {
    Hi = "hi"
}


export class GetApiV1ChaptersChapterNumberVersesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: GetApiV1ChaptersChapterNumberVersesLanguageEnum;
}


export class GetApiV1ChaptersChapterNumberVersesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiV1ChaptersChapterNumberVersesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetApiV1ChaptersChapterNumberVersesQueryParams;
}


export class GetApiV1ChaptersChapterNumberVersesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  verseSchema?: shared.VerseSchema;
}
