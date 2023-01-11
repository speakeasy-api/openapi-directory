import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetApiV1ChaptersChapterNumberVersesVerseNumberVerseNumberEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
export declare class GetApiV1ChaptersChapterNumberVersesVerseNumberPathParams extends SpeakeasyBase {
    chapterNumber: number;
    verseNumber: GetApiV1ChaptersChapterNumberVersesVerseNumberVerseNumberEnum;
}
export declare enum GetApiV1ChaptersChapterNumberVersesVerseNumberLanguageEnum {
    Hi = "hi"
}
export declare class GetApiV1ChaptersChapterNumberVersesVerseNumberQueryParams extends SpeakeasyBase {
    accessToken: string;
    language?: GetApiV1ChaptersChapterNumberVersesVerseNumberLanguageEnum;
}
export declare class GetApiV1ChaptersChapterNumberVersesVerseNumberRequest extends SpeakeasyBase {
    pathParams: GetApiV1ChaptersChapterNumberVersesVerseNumberPathParams;
    queryParams: GetApiV1ChaptersChapterNumberVersesVerseNumberQueryParams;
}
export declare class GetApiV1ChaptersChapterNumberVersesVerseNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verseSchema?: shared.VerseSchema;
}
