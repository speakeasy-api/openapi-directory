import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CategoryListingsAllRequest extends SpeakeasyBase {
    /**
     * Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
     */
    cursor?: string;
    ecosystemId: string;
    /**
     * ID of the record you are acting upon.
     */
    id: string;
    /**
     * Number of records to return
     */
    limit?: number;
}
export declare class CategoryListingsAllResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Listings
     */
    getListingsResponse?: shared.GetListingsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
