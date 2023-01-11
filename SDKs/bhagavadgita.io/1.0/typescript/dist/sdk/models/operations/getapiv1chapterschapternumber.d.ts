import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV1ChaptersChapterNumberPathParams extends SpeakeasyBase {
    chapterNumber: number;
}
export declare enum GetApiV1ChaptersChapterNumberLanguageEnum {
    Hi = "hi"
}
export declare class GetApiV1ChaptersChapterNumberQueryParams extends SpeakeasyBase {
    accessToken: string;
    language?: GetApiV1ChaptersChapterNumberLanguageEnum;
}
export declare class GetApiV1ChaptersChapterNumberRequest extends SpeakeasyBase {
    pathParams: GetApiV1ChaptersChapterNumberPathParams;
    queryParams: GetApiV1ChaptersChapterNumberQueryParams;
}
export declare class GetApiV1ChaptersChapterNumberResponse extends SpeakeasyBase {
    chapterSchema?: shared.ChapterSchema;
    contentType: string;
    statusCode: number;
}
