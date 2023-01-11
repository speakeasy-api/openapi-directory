import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InventoryVaccinesListQueryParams extends SpeakeasyBase {
    cursor?: string;
    cvxCode?: string;
    doctor?: number;
    pageSize?: number;
    since?: string;
    status?: string;
}
export declare class InventoryVaccinesListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class InventoryVaccinesList200ApplicationJson extends SpeakeasyBase {
    data?: shared.InventoryVaccine[];
    next?: string;
    previous?: string;
}
export declare class InventoryVaccinesListRequest extends SpeakeasyBase {
    queryParams: InventoryVaccinesListQueryParams;
    security: InventoryVaccinesListSecurity;
}
export declare class InventoryVaccinesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inventoryVaccinesList200ApplicationJSONObject?: InventoryVaccinesList200ApplicationJson;
}
