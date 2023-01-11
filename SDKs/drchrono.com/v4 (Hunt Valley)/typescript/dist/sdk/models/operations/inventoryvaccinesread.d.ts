import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InventoryVaccinesReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class InventoryVaccinesReadQueryParams extends SpeakeasyBase {
    cvxCode?: string;
    doctor?: number;
    since?: string;
    status?: string;
}
export declare class InventoryVaccinesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class InventoryVaccinesReadRequest extends SpeakeasyBase {
    pathParams: InventoryVaccinesReadPathParams;
    queryParams: InventoryVaccinesReadQueryParams;
    security: InventoryVaccinesReadSecurity;
}
export declare class InventoryVaccinesReadResponse extends SpeakeasyBase {
    contentType: string;
    inventoryVaccine?: shared.InventoryVaccine;
    statusCode: number;
}
