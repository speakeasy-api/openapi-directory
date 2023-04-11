import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGoalsRequest extends SpeakeasyBase {
    /**
     * Filter to goals with is_workspace_level set to query value. Must be used with the workspace parameter.
     */
    isWorkspaceLevel?: boolean;
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
     * Globally unique identifier for supporting portfolio.
     */
    portfolio?: string;
    /**
     * Globally unique identifier for supporting project.
     */
    project?: string;
    /**
     * Globally unique identifier for the team.
     */
    team?: string;
    /**
     * Globally unique identifiers for the time periods.
     */
    timePeriods?: string[];
    /**
     * Globally unique identifier for the workspace.
     */
    workspace?: string;
}
/**
 * Successfully retrieved the requested goals.
 */
export declare class GetGoals200ApplicationJSON extends SpeakeasyBase {
    data?: shared.GoalCompact[];
}
export declare class GetGoalsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully retrieved the requested goals.
     */
    getGoals200ApplicationJSONObject?: GetGoals200ApplicationJSON;
}
