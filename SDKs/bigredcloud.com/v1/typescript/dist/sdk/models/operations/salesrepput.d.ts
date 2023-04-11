import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SalesRepPutRequest extends SpeakeasyBase {
    /**
     * Information of Sale Rep to update.
     */
    saleRepsDto: shared.SaleRepsDto;
    /**
     * Id of Sale Rep to update.
     */
    id: number;
}
export declare class SalesRepPutResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    salesRepPut200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
