import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListOrganizationUsersQueryParams extends SpeakeasyBase {
    direction?: shared.SortDirectionEnum;
    group?: string[];
    licenseExpirationDate?: string[];
    limit?: number;
    next?: string;
    noActiveLicense?: boolean;
    onlyIds?: boolean;
    previous?: string;
    q?: string;
    role?: shared.RoleEnum[];
    sort?: string;
}
export declare class ListOrganizationUsersSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class ListOrganizationUsersRequest extends SpeakeasyBase {
    queryParams: ListOrganizationUsersQueryParams;
    security: ListOrganizationUsersSecurity;
}
export declare class ListOrganizationUsersResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    userDetailsAdmins?: shared.UserDetailsAdmin[];
}
