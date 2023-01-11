import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetPeopleSortEnum {
    CreatedAt = "created_at",
    FirstName = "first_name",
    LastName = "last_name",
    UpdatedAt = "updated_at"
}
export declare class GetPeopleQueryParams extends SpeakeasyBase {
    ids?: string[];
    pageNumber?: number;
    pageSize?: number;
    q?: string;
    sort?: GetPeopleSortEnum[];
}
export declare class GetPeople200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.Person[];
    links?: shared.Links;
}
/**
 * An object containing references to the source of the error, optionally including any of the following members.
 *
**/
export declare class GetPeople400ApplicationVndApiPlusJsonErrorsSource extends SpeakeasyBase {
    parameter?: string;
    pointer?: string;
}
export declare class GetPeople400ApplicationVndApiPlusJsonErrors extends SpeakeasyBase {
    code?: string;
    detail?: string;
    source?: GetPeople400ApplicationVndApiPlusJsonErrorsSource;
    status?: string;
    title?: string;
}
export declare class GetPeople400ApplicationVndApiPlusJson extends SpeakeasyBase {
    errors?: GetPeople400ApplicationVndApiPlusJsonErrors[];
}
export declare class GetPeopleRequest extends SpeakeasyBase {
    queryParams: GetPeopleQueryParams;
}
export declare class GetPeopleResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getPeople200ApplicationVndApiPlusJsonObject?: GetPeople200ApplicationVndApiPlusJson;
    getPeople400ApplicationVndApiPlusJsonObject?: GetPeople400ApplicationVndApiPlusJson;
}
