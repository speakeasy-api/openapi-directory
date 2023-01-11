import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InventoryCategoriesListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    since?: string;
}
export declare class InventoryCategoriesListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class InventoryCategoriesList200ApplicationJson extends SpeakeasyBase {
    data?: shared.InventoryCategory[];
    next?: string;
    previous?: string;
}
export declare class InventoryCategoriesListRequest extends SpeakeasyBase {
    queryParams: InventoryCategoriesListQueryParams;
    security: InventoryCategoriesListSecurity;
}
export declare class InventoryCategoriesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inventoryCategoriesList200ApplicationJSONObject?: InventoryCategoriesList200ApplicationJson;
}
