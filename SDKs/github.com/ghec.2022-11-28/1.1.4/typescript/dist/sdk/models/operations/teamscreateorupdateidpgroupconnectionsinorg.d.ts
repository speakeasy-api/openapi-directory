import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups extends SpeakeasyBase {
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
}
export declare class TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBody extends SpeakeasyBase {
    /**
     * The IdP groups you want to connect to a GitHub team. When updating, the new `groups` object will replace the original one. You must include any existing groups that you don't want to remove.
     */
    groups?: TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups[];
}
export declare class TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequest extends SpeakeasyBase {
    requestBody: TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The slug of the team name.
     */
    teamSlug: string;
}
export declare class TeamsCreateOrUpdateIdpGroupConnectionsInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    groupMapping?: shared.GroupMapping;
}
