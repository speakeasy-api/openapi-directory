import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetClickwrapsRequest extends SpeakeasyBase {
    /**
     * Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.
     */
    cursor?: string;
    /**
     * Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
     */
    perPage?: number;
}
export declare class GetClickwrapsResponse extends SpeakeasyBase {
    /**
     * A list of Clickwraps objects.
     */
    clickwrapEntities?: shared.ClickwrapEntity[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
