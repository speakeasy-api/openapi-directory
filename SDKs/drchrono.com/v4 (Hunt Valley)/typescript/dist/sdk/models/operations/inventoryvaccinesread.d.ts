import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InventoryVaccinesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class InventoryVaccinesReadRequest extends SpeakeasyBase {
    cvxCode?: string;
    doctor?: number;
    id: string;
    since?: string;
    status?: string;
}
export declare class InventoryVaccinesReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    inventoryVaccine?: shared.InventoryVaccine;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
