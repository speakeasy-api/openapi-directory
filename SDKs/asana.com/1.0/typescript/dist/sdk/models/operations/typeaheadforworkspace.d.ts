import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of values the typeahead should return. You can choose from one of the following: `custom_field`, `project`, `project_template`, `portfolio`, `tag`, `task`, and `user`. Note that unlike in the names of endpoints, the types listed here are in singular form (e.g. `task`). Using multiple types is not yet supported.
 */
export declare enum TypeaheadForWorkspaceResourceTypeEnum {
    CustomField = "custom_field",
    Project = "project",
    ProjectTemplate = "project_template",
    Portfolio = "portfolio",
    Tag = "tag",
    Task = "task",
    User = "user"
}
/**
 * *Deprecated: new integrations should prefer the resource_type field.*
 */
export declare enum TypeaheadForWorkspaceTypeEnum {
    CustomField = "custom_field",
    Portfolio = "portfolio",
    Project = "project",
    Tag = "tag",
    Task = "task",
    User = "user"
}
export declare class TypeaheadForWorkspaceRequest extends SpeakeasyBase {
    /**
     * The number of results to return. The default is 20 if this parameter is omitted, with a minimum of 1 and a maximum of 100. If there are fewer results found than requested, all will be returned.
     */
    count?: number;
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
     * The string that will be used to search for relevant objects. If an empty string is passed in, the API will return results.
     */
    query?: string;
    /**
     * The type of values the typeahead should return. You can choose from one of the following: `custom_field`, `project`, `project_template`, `portfolio`, `tag`, `task`, and `user`. Note that unlike in the names of endpoints, the types listed here are in singular form (e.g. `task`). Using multiple types is not yet supported.
     */
    resourceType: TypeaheadForWorkspaceResourceTypeEnum;
    /**
     * *Deprecated: new integrations should prefer the resource_type field.*
     */
    type?: TypeaheadForWorkspaceTypeEnum;
    /**
     * Globally unique identifier for the workspace or organization.
     */
    workspaceGid: string;
}
/**
 * A generic list of objects, such as those returned by the typeahead search endpoint.
 */
export declare class TypeaheadForWorkspace200ApplicationJSON extends SpeakeasyBase {
    data?: shared.AsanaNamedResource[];
}
export declare class TypeaheadForWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully retrieved objects via a typeahead search algorithm.
     */
    typeaheadForWorkspace200ApplicationJSONObject?: TypeaheadForWorkspace200ApplicationJSON;
}
