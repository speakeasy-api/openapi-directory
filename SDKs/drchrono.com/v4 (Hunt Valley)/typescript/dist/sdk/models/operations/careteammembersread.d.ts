import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CareTeamMembersReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class CareTeamMembersReadRequest extends SpeakeasyBase {
    appointment?: number;
    doctor?: number;
    id: string;
    patient?: number;
}
export declare class CareTeamMembersReadResponse extends SpeakeasyBase {
    /**
     * OK
     */
    careTeamMember?: shared.CareTeamMember;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
