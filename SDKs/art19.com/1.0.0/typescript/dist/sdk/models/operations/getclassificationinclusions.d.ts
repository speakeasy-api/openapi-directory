import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetClassificationInclusionsClassificationTypeEnum {
    AlternateFeedType = "AlternateFeedType",
    Genre = "Genre",
    Industry = "Industry",
    Language = "Language",
    MediaRating = "MediaRating"
}
export declare enum GetClassificationInclusionsClassifiedTypeEnum {
    Series = "Series",
    Season = "Season",
    Episode = "Episode"
}
export declare enum GetClassificationInclusionsSortEnum {
    ClassificationValue = "classification_value",
    CreatedAt = "created_at",
    Position = "position"
}
export declare class GetClassificationInclusionsQueryParams extends SpeakeasyBase {
    classificationId?: string;
    classificationType?: GetClassificationInclusionsClassificationTypeEnum;
    classifiedId?: string;
    classifiedType?: GetClassificationInclusionsClassifiedTypeEnum;
    ids?: string[];
    pageNumber?: number;
    pageSize?: number;
    q?: string;
    sort?: GetClassificationInclusionsSortEnum[];
}
export declare class GetClassificationInclusions200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.ClassificationInclusion[];
    links?: shared.Links;
}
/**
 * An object containing references to the source of the error, optionally including any of the following members.
 *
**/
export declare class GetClassificationInclusions400ApplicationVndApiPlusJsonErrorsSource extends SpeakeasyBase {
    parameter?: string;
    pointer?: string;
}
export declare class GetClassificationInclusions400ApplicationVndApiPlusJsonErrors extends SpeakeasyBase {
    code?: string;
    detail?: string;
    source?: GetClassificationInclusions400ApplicationVndApiPlusJsonErrorsSource;
    status?: string;
    title?: string;
}
export declare class GetClassificationInclusions400ApplicationVndApiPlusJson extends SpeakeasyBase {
    errors?: GetClassificationInclusions400ApplicationVndApiPlusJsonErrors[];
}
export declare class GetClassificationInclusionsRequest extends SpeakeasyBase {
    queryParams: GetClassificationInclusionsQueryParams;
}
export declare class GetClassificationInclusionsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getClassificationInclusions200ApplicationVndApiPlusJsonObject?: GetClassificationInclusions200ApplicationVndApiPlusJson;
    getClassificationInclusions400ApplicationVndApiPlusJsonObject?: GetClassificationInclusions400ApplicationVndApiPlusJson;
}
