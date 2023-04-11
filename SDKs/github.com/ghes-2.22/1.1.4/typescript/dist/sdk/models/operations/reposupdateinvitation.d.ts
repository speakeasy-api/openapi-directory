import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The permissions that the associated user will have on the repository. Valid values are `read`, `write`, `maintain`, `triage`, and `admin`.
 */
export declare enum ReposUpdateInvitationRequestBodyPermissionsEnum {
    Read = "read",
    Write = "write",
    Maintain = "maintain",
    Triage = "triage",
    Admin = "admin"
}
export declare class ReposUpdateInvitationRequestBody extends SpeakeasyBase {
    /**
     * The permissions that the associated user will have on the repository. Valid values are `read`, `write`, `maintain`, `triage`, and `admin`.
     */
    permissions?: ReposUpdateInvitationRequestBodyPermissionsEnum;
}
export declare class ReposUpdateInvitationRequest extends SpeakeasyBase {
    requestBody?: ReposUpdateInvitationRequestBody;
    /**
     * invitation_id parameter
     */
    invitationId: number;
    owner: string;
    repo: string;
}
export declare class ReposUpdateInvitationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    repositoryInvitation?: shared.RepositoryInvitation;
}
