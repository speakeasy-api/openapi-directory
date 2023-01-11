import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListClassesStateEnum {
    Active = "active",
    Inactive = "inactive",
    Archived = "archived"
}
export declare class ListClassesQueryParams extends SpeakeasyBase {
    state?: ListClassesStateEnum;
}
export declare class ListClassesSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class ListClassesRequest extends SpeakeasyBase {
    queryParams: ListClassesQueryParams;
    security: ListClassesSecurity;
}
export declare class ListClassesResponse extends SpeakeasyBase {
    classDetails?: shared.ClassDetails[];
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
