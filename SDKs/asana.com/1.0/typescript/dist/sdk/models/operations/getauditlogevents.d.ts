import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAuditLogEventsRequest extends SpeakeasyBase {
    /**
     * Filter to events triggered by the actor with this ID.
     */
    actorGid?: string;
    /**
     * Filter to events with an actor of this type.
     *
     * @remarks
     * This only needs to be included if querying for actor types without an ID. If `actor_gid` is included, this should be excluded.
     */
    actorType?: shared.AuditLogActorTypeEnum;
    /**
     * Filter to events created before this time (exclusive).
     */
    endAt?: Date;
    /**
     * Filter to events of this type.
     *
     * @remarks
     * Refer to the [Supported AuditLogEvents](/docs/supported-auditlogevents) for a full list of values.
     */
    eventType?: string;
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
     * Filter to events with this resource ID.
     */
    resourceGid?: string;
    /**
     * Filter to events created after this time (inclusive).
     */
    startAt?: Date;
    /**
     * Globally unique identifier for the workspace or organization.
     */
    workspaceGid: string;
}
/**
 * AuditLogEvents were successfully retrieved.
 */
export declare class GetAuditLogEvents200ApplicationJSON extends SpeakeasyBase {
    data?: shared.AuditLogEvent[];
}
export declare class GetAuditLogEventsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * AuditLogEvents were successfully retrieved.
     */
    getAuditLogEvents200ApplicationJSONObject?: GetAuditLogEvents200ApplicationJSON;
}
