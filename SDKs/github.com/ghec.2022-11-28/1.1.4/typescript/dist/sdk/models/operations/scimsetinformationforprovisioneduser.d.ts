import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ScimSetInformationForProvisionedUserRequestBodyEmails extends SpeakeasyBase {
    primary?: boolean;
    type?: string;
    value: string;
}
export declare class ScimSetInformationForProvisionedUserRequestBodyName extends SpeakeasyBase {
    familyName: string;
    formatted?: string;
    givenName: string;
}
export declare class ScimSetInformationForProvisionedUserRequestBody extends SpeakeasyBase {
    active?: boolean;
    /**
     * The name of the user, suitable for display to end-users
     */
    displayName?: string;
    /**
     * user emails
     */
    emails: ScimSetInformationForProvisionedUserRequestBodyEmails[];
    externalId?: string;
    groups?: string[];
    name: ScimSetInformationForProvisionedUserRequestBodyName;
    schemas?: string[];
    /**
     * Configured by the admin. Could be an email, login, or username
     */
    userName: string;
}
export declare class ScimSetInformationForProvisionedUserRequest extends SpeakeasyBase {
    requestBody: ScimSetInformationForProvisionedUserRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The unique identifier of the SCIM user.
     */
    scimUserId: string;
}
export declare class ScimSetInformationForProvisionedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    scimError?: shared.ScimError;
    /**
     * Response
     */
    scimUser?: shared.ScimUser;
}
