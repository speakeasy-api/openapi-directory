import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PurchasesPutRequest extends SpeakeasyBase {
    /**
     * Information of Purchase to update.
     */
    purchaseDto: shared.PurchaseDto;
    /**
     * Id of Purchase to update.
     */
    id: number;
}
export declare class PurchasesPutResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    purchasesPut200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
