import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetApiV1VersesLanguageEnum {
    Hi = "hi"
}
export declare class GetApiV1VersesQueryParams extends SpeakeasyBase {
    accessToken: string;
    language?: GetApiV1VersesLanguageEnum;
}
export declare class GetApiV1VersesRequest extends SpeakeasyBase {
    queryParams: GetApiV1VersesQueryParams;
}
export declare class GetApiV1VersesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verseSchema?: shared.VerseSchema;
}
