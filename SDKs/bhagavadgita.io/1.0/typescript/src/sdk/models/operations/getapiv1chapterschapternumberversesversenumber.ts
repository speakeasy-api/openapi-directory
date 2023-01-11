import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetApiV1ChaptersChapterNumberVersesVerseNumberVerseNumberEnum {
    One = "1",
    Two = "2",
    Three = "3"
}


export class GetApiV1ChaptersChapterNumberVersesVerseNumberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chapter_number" })
  chapterNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=verse_number" })
  verseNumber: GetApiV1ChaptersChapterNumberVersesVerseNumberVerseNumberEnum;
}

export enum GetApiV1ChaptersChapterNumberVersesVerseNumberLanguageEnum {
    Hi = "hi"
}


export class GetApiV1ChaptersChapterNumberVersesVerseNumberQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: GetApiV1ChaptersChapterNumberVersesVerseNumberLanguageEnum;
}


export class GetApiV1ChaptersChapterNumberVersesVerseNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiV1ChaptersChapterNumberVersesVerseNumberPathParams;

  @SpeakeasyMetadata()
  queryParams: GetApiV1ChaptersChapterNumberVersesVerseNumberQueryParams;
}


export class GetApiV1ChaptersChapterNumberVersesVerseNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  verseSchema?: shared.VerseSchema;
}
