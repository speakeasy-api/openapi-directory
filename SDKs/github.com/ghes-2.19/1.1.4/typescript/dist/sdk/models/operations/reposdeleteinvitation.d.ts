import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReposDeleteInvitationRequest extends SpeakeasyBase {
    /**
     * invitation_id parameter
     */
    invitationId: number;
    owner: string;
    repo: string;
}
export declare class ReposDeleteInvitationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
