import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InventoryCategoriesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class InventoryCategoriesReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    since?: string;
}
export declare class InventoryCategoriesReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    inventoryCategory?: shared.InventoryCategory;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
