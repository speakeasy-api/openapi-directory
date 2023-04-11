import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CollectionsAllRequest extends SpeakeasyBase {
    /**
     * Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
     */
    cursor?: string;
    ecosystemId: string;
    /**
     * Number of records to return
     */
    limit?: number;
}
export declare class CollectionsAllResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Collections
     */
    getCollectionsResponse?: shared.GetCollectionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
