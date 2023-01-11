import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV1ChaptersChapterNumberVersesPathParams extends SpeakeasyBase {
    chapterNumber: number;
}
export declare enum GetApiV1ChaptersChapterNumberVersesLanguageEnum {
    Hi = "hi"
}
export declare class GetApiV1ChaptersChapterNumberVersesQueryParams extends SpeakeasyBase {
    accessToken: string;
    language?: GetApiV1ChaptersChapterNumberVersesLanguageEnum;
}
export declare class GetApiV1ChaptersChapterNumberVersesRequest extends SpeakeasyBase {
    pathParams: GetApiV1ChaptersChapterNumberVersesPathParams;
    queryParams: GetApiV1ChaptersChapterNumberVersesQueryParams;
}
export declare class GetApiV1ChaptersChapterNumberVersesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verseSchema?: shared.VerseSchema;
}
