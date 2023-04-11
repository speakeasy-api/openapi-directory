import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ScimProvisionAndInviteUserRequestBodyEmails extends SpeakeasyBase {
    primary?: boolean;
    type?: string;
    value: string;
}
export declare class ScimProvisionAndInviteUserRequestBodyName extends SpeakeasyBase {
    familyName: string;
    formatted?: string;
    givenName: string;
}
export declare class ScimProvisionAndInviteUserRequestBody extends SpeakeasyBase {
    active?: boolean;
    /**
     * The name of the user, suitable for display to end-users
     */
    displayName?: string;
    /**
     * user emails
     */
    emails: ScimProvisionAndInviteUserRequestBodyEmails[];
    externalId?: string;
    groups?: string[];
    name: ScimProvisionAndInviteUserRequestBodyName;
    schemas?: string[];
    /**
     * Configured by the admin. Could be an email, login, or username
     */
    userName: string;
}
export declare class ScimProvisionAndInviteUserRequest extends SpeakeasyBase {
    requestBody: ScimProvisionAndInviteUserRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
}
export declare class ScimProvisionAndInviteUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    scimError?: shared.ScimError;
    /**
     * Response
     */
    scimUser?: shared.ScimUser;
}
