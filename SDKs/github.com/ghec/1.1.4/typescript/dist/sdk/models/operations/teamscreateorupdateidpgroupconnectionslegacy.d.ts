import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups extends SpeakeasyBase {
    description?: string;
    /**
     * Description of the IdP group.
     */
    groupDescription: string;
    /**
     * ID of the IdP group.
     */
    groupId: string;
    /**
     * Name of the IdP group.
     */
    groupName: string;
    id?: string;
    name?: string;
}
export declare class TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBody extends SpeakeasyBase {
    /**
     * The IdP groups you want to connect to a GitHub team. When updating, the new `groups` object will replace the original one. You must include any existing groups that you don't want to remove.
     */
    groups: TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups[];
    syncedAt?: string;
}
export declare class TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequest extends SpeakeasyBase {
    requestBody: TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBody;
    /**
     * The unique identifier of the team.
     */
    teamId: number;
}
export declare class TeamsCreateOrUpdateIdpGroupConnectionsLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    groupMapping?: shared.GroupMapping;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
