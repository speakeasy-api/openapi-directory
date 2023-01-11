import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CareTeamMembersReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class CareTeamMembersReadQueryParams extends SpeakeasyBase {
    appointment?: number;
    doctor?: number;
    patient?: number;
}
export declare class CareTeamMembersReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class CareTeamMembersReadRequest extends SpeakeasyBase {
    pathParams: CareTeamMembersReadPathParams;
    queryParams: CareTeamMembersReadQueryParams;
    security: CareTeamMembersReadSecurity;
}
export declare class CareTeamMembersReadResponse extends SpeakeasyBase {
    careTeamMember?: shared.CareTeamMember;
    contentType: string;
    statusCode: number;
}
