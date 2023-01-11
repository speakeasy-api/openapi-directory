import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetClassificationsSortEnum {
    CreatedAt = "created_at",
    UpdatedAt = "updated_at",
    Value = "value"
}
export declare enum GetClassificationsTypeEnum {
    AlternateFeedType = "AlternateFeedType",
    Genre = "Genre",
    Industry = "Industry",
    Language = "Language",
    MediaRating = "MediaRating"
}
export declare class GetClassificationsQueryParams extends SpeakeasyBase {
    ids?: string[];
    isCountry?: string;
    pageNumber?: number;
    pageSize?: number;
    q?: string;
    sort?: GetClassificationsSortEnum[];
    type?: GetClassificationsTypeEnum;
}
export declare class GetClassifications200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.Classification[];
    links?: shared.Links;
}
/**
 * An object containing references to the source of the error, optionally including any of the following members.
 *
**/
export declare class GetClassifications400ApplicationVndApiPlusJsonErrorsSource extends SpeakeasyBase {
    parameter?: string;
    pointer?: string;
}
export declare class GetClassifications400ApplicationVndApiPlusJsonErrors extends SpeakeasyBase {
    code?: string;
    detail?: string;
    source?: GetClassifications400ApplicationVndApiPlusJsonErrorsSource;
    status?: string;
    title?: string;
}
export declare class GetClassifications400ApplicationVndApiPlusJson extends SpeakeasyBase {
    errors?: GetClassifications400ApplicationVndApiPlusJsonErrors[];
}
export declare class GetClassificationsRequest extends SpeakeasyBase {
    queryParams: GetClassificationsQueryParams;
}
export declare class GetClassificationsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getClassifications200ApplicationVndApiPlusJsonObject?: GetClassifications200ApplicationVndApiPlusJson;
    getClassifications400ApplicationVndApiPlusJsonObject?: GetClassifications400ApplicationVndApiPlusJson;
}
