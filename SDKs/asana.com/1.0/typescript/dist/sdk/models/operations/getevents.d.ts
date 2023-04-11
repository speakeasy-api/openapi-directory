import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEventsRequest extends SpeakeasyBase {
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
     * A resource ID to subscribe to. The resource can be a task or project.
     */
    resource: string;
    /**
     * A sync token received from the last request, or none on first sync. Events will be returned from the point in time that the sync token was generated.
     *
     * @remarks
     * *Note: On your first request, omit the sync token. The response will be the same as for an expired sync token, and will include a new valid sync token.If the sync token is too old (which may happen from time to time) the API will return a `412 Precondition Failed` error, and include a fresh sync token in the response.*
     */
    sync?: string;
}
/**
 * The full record for all events that have occurred since the sync token was created.
 */
export declare class GetEvents200ApplicationJSON extends SpeakeasyBase {
    data?: shared.EventResponse[];
    /**
     * Indicates whether there are more events to pull.
     */
    hasMore?: boolean;
    /**
     * A sync token to be used with the next call to the /events endpoint.
     */
    sync?: string;
}
export declare class GetEventsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully retrieved events.
     */
    getEvents200ApplicationJSONObject?: GetEvents200ApplicationJSON;
}
