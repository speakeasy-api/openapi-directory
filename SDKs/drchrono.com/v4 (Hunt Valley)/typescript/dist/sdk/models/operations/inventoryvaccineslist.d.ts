import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InventoryVaccinesListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class InventoryVaccinesListRequest extends SpeakeasyBase {
    cursor?: string;
    cvxCode?: string;
    doctor?: number;
    pageSize?: number;
    since?: string;
    status?: string;
}
/**
 * Paginated Result
 */
export declare class InventoryVaccinesList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.InventoryVaccine[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class InventoryVaccinesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    inventoryVaccinesList200ApplicationJSONObject?: InventoryVaccinesList200ApplicationJSON;
}
