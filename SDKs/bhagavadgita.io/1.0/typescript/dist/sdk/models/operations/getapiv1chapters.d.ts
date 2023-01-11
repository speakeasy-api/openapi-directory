import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetApiV1ChaptersLanguageEnum {
    Hi = "hi"
}
export declare class GetApiV1ChaptersQueryParams extends SpeakeasyBase {
    accessToken: string;
    language?: GetApiV1ChaptersLanguageEnum;
}
export declare class GetApiV1ChaptersRequest extends SpeakeasyBase {
    queryParams: GetApiV1ChaptersQueryParams;
}
export declare class GetApiV1ChaptersResponse extends SpeakeasyBase {
    chapterSchema?: shared.ChapterSchema;
    contentType: string;
    statusCode: number;
}
