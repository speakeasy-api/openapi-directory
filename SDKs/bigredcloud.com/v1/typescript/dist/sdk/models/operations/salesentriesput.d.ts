import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SalesEntriesPutRequest extends SpeakeasyBase {
    /**
     * Information of Sales Entry to update.
     */
    salesEntryDto: shared.SalesEntryDto;
    /**
     * Id of Sales Entry to update.
     */
    id: number;
}
export declare class SalesEntriesPutResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    salesEntriesPut200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
