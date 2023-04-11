import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCategoriesRequest extends SpeakeasyBase {
    expand?: string;
}
/**
 * categories
 */
export declare class GetCategories200ApplicationJSON extends SpeakeasyBase {
    categories: shared.Category[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * categories
     */
    getCategories200ApplicationJSONObject?: GetCategories200ApplicationJSON;
}
