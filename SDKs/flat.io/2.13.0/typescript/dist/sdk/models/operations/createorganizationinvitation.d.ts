import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateOrganizationInvitationSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class CreateOrganizationInvitationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    /**
     * New invitation created
     */
    organizationInvitation?: shared.OrganizationInvitation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
