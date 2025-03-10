import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWorkspaceMembershipsForWorkspaceRequest extends SpeakeasyBase {
    /**
     * Results per page.
     *
     * @remarks
     * The number of objects to return per page. The value must be between 1 and 100.
     */
    limit?: number;
    /**
     * Offset token.
     *
     * @remarks
     * An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.
     * 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
     */
    offset?: string;
    /**
     * Defines fields to return.
     *
     * @remarks
     * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
     * The id of included objects will always be returned, regardless of the field options.
     */
    optFields?: string[];
    /**
     * Provides “pretty” output.
     *
     * @remarks
     * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     */
    optPretty?: boolean;
    /**
     * A string identifying a user. This can either be the string "me", an email, or the gid of a user.
     */
    user?: string;
    /**
     * Globally unique identifier for the workspace or organization.
     */
    workspaceGid: string;
}
/**
 * Successfully retrieved the requested workspace's memberships.
 */
export declare class GetWorkspaceMembershipsForWorkspace200ApplicationJSON extends SpeakeasyBase {
    data?: shared.WorkspaceMembershipCompact[];
}
export declare class GetWorkspaceMembershipsForWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully retrieved the requested workspace's memberships.
     */
    getWorkspaceMembershipsForWorkspace200ApplicationJSONObject?: GetWorkspaceMembershipsForWorkspace200ApplicationJSON;
}
