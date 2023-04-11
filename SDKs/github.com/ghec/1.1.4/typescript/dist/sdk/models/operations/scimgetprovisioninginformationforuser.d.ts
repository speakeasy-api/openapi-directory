import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ScimGetProvisioningInformationForUserRequest extends SpeakeasyBase {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The unique identifier of the SCIM user.
     */
    scimUserId: string;
}
export declare class ScimGetProvisioningInformationForUserResponse extends SpeakeasyBase {
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
