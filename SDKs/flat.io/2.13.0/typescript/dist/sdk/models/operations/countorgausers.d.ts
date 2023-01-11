import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CountOrgaUsersQueryParams extends SpeakeasyBase {
    group?: string[];
    noActiveLicense?: boolean;
    q?: string;
    role?: shared.RoleEnum[];
}
export declare class CountOrgaUsersSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class CountOrgaUsersRequest extends SpeakeasyBase {
    queryParams: CountOrgaUsersQueryParams;
    security: CountOrgaUsersSecurity;
}
export declare class CountOrgaUsersResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    countOrgaUsers200ApplicationJSONInteger?: number;
}
