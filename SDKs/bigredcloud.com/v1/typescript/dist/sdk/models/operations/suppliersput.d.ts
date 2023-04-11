import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SuppliersPutRequest extends SpeakeasyBase {
    /**
     * Information of Supplier to update.
     */
    supplierDto: shared.SupplierDto;
    /**
     * Id of Supplier to update.
     */
    id: number;
}
export declare class SuppliersPutResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    suppliersPut200ApplicationJSONObject?: Record<string, any>;
}
