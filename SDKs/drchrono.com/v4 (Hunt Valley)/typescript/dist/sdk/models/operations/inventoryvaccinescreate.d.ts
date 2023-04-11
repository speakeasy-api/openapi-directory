import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InventoryVaccinesCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class InventoryVaccinesCreateRequest extends SpeakeasyBase {
    cvxCode?: string;
    doctor?: number;
    since?: string;
    status?: string;
}
export declare class InventoryVaccinesCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    inventoryVaccine?: shared.InventoryVaccine;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
