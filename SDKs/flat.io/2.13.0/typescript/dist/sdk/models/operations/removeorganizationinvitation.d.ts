import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RemoveOrganizationInvitationSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class RemoveOrganizationInvitationRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the invitation
     */
    invitation: string;
}
export declare class RemoveOrganizationInvitationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
