import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAssignmentsRequest extends SpeakeasyBase {
    /**
     * Select assignments with no closing date.
     */
    alwaysOpen?: boolean;
    /**
     * Restrict results to the assignment (or potentially assignments) with this exact name
     */
    name?: string;
    /**
     * Select open or closed assignments
     */
    open?: boolean;
    /**
     * Restrict results to assignments owned by this user.
     */
    ownedBy?: string;
    /**
     * Pagination page
     */
    page?: number;
    /**
     * Pagination page size
     */
    pageSize?: number;
    /**
     * Restrict results to assignments whose name or description matches this keyword.
     */
    q?: string;
    /**
     * Restrict results to assignments which are tagged with this tag.
     */
    tag?: string;
    /**
     * Select an assignment by urlWords.
     */
    urlWords?: string;
}
export declare class GetAssignmentsResponse extends SpeakeasyBase {
    /**
     * A list of assignments
     */
    assignments?: shared.Assignment[];
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
