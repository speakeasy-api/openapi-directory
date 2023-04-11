import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposAcceptInvitationRequest extends SpeakeasyBase {
    /**
     * invitation_id parameter
     */
    invitationId: number;
}
export declare class ReposAcceptInvitationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
}
