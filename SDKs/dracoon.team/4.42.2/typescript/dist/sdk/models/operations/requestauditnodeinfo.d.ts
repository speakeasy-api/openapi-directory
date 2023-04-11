import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestAuditNodeInfoRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Filter string
     */
    filter?: string;
    /**
     * Range limit.
     *
     * @remarks
     *
     * Maximum 500.
     *
     *  For more results please use paging (`offset` + `limit`).
     */
    limit?: number;
    /**
     * Range offset
     */
    offset?: number;
    /**
     * Parent node ID.
     *
     * @remarks
     *
     * Only rooms can be parents.
     *
     * Parent ID `0` or empty is the root node.
     */
    parentId?: number;
    /**
     * Sort string
     */
    sort?: string;
}
export declare class RequestAuditNodeInfoResponse extends SpeakeasyBase {
    /**
     * OK
     */
    auditNodeInfoResponse?: shared.AuditNodeInfoResponse;
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
