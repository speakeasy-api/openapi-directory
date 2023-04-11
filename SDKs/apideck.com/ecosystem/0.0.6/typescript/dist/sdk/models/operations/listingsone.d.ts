import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListingsOneRequest extends SpeakeasyBase {
    ecosystemId: string;
    /**
     * ID of the record you are acting upon.
     */
    id: string;
}
export declare class ListingsOneResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Listing
     */
    getListingResponse?: shared.GetListingResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
