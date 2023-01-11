import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CareTeamMembersListQueryParams extends SpeakeasyBase {
    appointment?: number;
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    patient?: number;
}
export declare class CareTeamMembersListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class CareTeamMembersList200ApplicationJson extends SpeakeasyBase {
    data?: shared.CareTeamMember[];
    next?: string;
    previous?: string;
}
export declare class CareTeamMembersListRequest extends SpeakeasyBase {
    queryParams: CareTeamMembersListQueryParams;
    security: CareTeamMembersListSecurity;
}
export declare class CareTeamMembersListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    careTeamMembersList200ApplicationJSONObject?: CareTeamMembersList200ApplicationJson;
}
