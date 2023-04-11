import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CareTeamMembersListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class CareTeamMembersListRequest extends SpeakeasyBase {
    appointment?: number;
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    patient?: number;
}
/**
 * Paginated Result
 */
export declare class CareTeamMembersList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.CareTeamMember[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class CareTeamMembersListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    careTeamMembersList200ApplicationJSONObject?: CareTeamMembersList200ApplicationJSON;
}
