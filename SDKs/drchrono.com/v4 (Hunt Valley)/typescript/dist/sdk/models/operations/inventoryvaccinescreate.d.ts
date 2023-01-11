import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InventoryVaccinesCreateQueryParams extends SpeakeasyBase {
    cvxCode?: string;
    doctor?: number;
    since?: string;
    status?: string;
}
export declare class InventoryVaccinesCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class InventoryVaccinesCreateRequest extends SpeakeasyBase {
    queryParams: InventoryVaccinesCreateQueryParams;
    security: InventoryVaccinesCreateSecurity;
}
export declare class InventoryVaccinesCreateResponse extends SpeakeasyBase {
    contentType: string;
    inventoryVaccine?: shared.InventoryVaccine;
    statusCode: number;
}
