import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InventoryCategoriesListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class InventoryCategoriesListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    since?: string;
}
/**
 * Paginated Result
 */
export declare class InventoryCategoriesList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.InventoryCategory[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class InventoryCategoriesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    inventoryCategoriesList200ApplicationJSONObject?: InventoryCategoriesList200ApplicationJSON;
}
