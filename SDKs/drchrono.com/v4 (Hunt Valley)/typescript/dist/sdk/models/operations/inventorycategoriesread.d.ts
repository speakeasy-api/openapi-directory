import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InventoryCategoriesReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class InventoryCategoriesReadQueryParams extends SpeakeasyBase {
    doctor?: number;
    since?: string;
}
export declare class InventoryCategoriesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class InventoryCategoriesReadRequest extends SpeakeasyBase {
    pathParams: InventoryCategoriesReadPathParams;
    queryParams: InventoryCategoriesReadQueryParams;
    security: InventoryCategoriesReadSecurity;
}
export declare class InventoryCategoriesReadResponse extends SpeakeasyBase {
    contentType: string;
    inventoryCategory?: shared.InventoryCategory;
    statusCode: number;
}
