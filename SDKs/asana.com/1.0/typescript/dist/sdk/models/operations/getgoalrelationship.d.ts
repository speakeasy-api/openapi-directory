import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGoalRelationshipRequest extends SpeakeasyBase {
    /**
     * Globally unique identifier for the goal relationship.
     */
    goalRelationshipGid: string;
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
}
/**
 * Successfully retrieved the record for the goal relationship.
 */
export declare class GetGoalRelationship200ApplicationJSON extends SpeakeasyBase {
    data?: shared.GoalRelationshipResponse;
}
export declare class GetGoalRelationshipResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully retrieved the record for the goal relationship.
     */
    getGoalRelationship200ApplicationJSONObject?: GetGoalRelationship200ApplicationJSON;
}
