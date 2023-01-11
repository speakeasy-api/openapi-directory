import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetCreditsCreditableTypeEnum {
    Series = "Series",
    Season = "Season",
    Episode = "Episode"
}
export declare enum GetCreditsSortEnum {
    CreatedAt = "created_at",
    Position = "position",
    UpdatedAt = "updated_at"
}
export declare class GetCreditsQueryParams extends SpeakeasyBase {
    creditableId?: string;
    creditableType?: GetCreditsCreditableTypeEnum;
    ids?: string[];
    pageNumber?: number;
    pageSize?: number;
    sort?: GetCreditsSortEnum[];
}
export declare class GetCredits200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.Credit[];
    links?: shared.Links;
}
/**
 * An object containing references to the source of the error, optionally including any of the following members.
 *
**/
export declare class GetCredits400ApplicationVndApiPlusJsonErrorsSource extends SpeakeasyBase {
    parameter?: string;
    pointer?: string;
}
export declare class GetCredits400ApplicationVndApiPlusJsonErrors extends SpeakeasyBase {
    code?: string;
    detail?: string;
    source?: GetCredits400ApplicationVndApiPlusJsonErrorsSource;
    status?: string;
    title?: string;
}
export declare class GetCredits400ApplicationVndApiPlusJson extends SpeakeasyBase {
    errors?: GetCredits400ApplicationVndApiPlusJsonErrors[];
}
export declare class GetCreditsRequest extends SpeakeasyBase {
    queryParams: GetCreditsQueryParams;
}
export declare class GetCreditsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getCredits200ApplicationVndApiPlusJsonObject?: GetCredits200ApplicationVndApiPlusJson;
    getCredits400ApplicationVndApiPlusJsonObject?: GetCredits400ApplicationVndApiPlusJson;
}
