import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CustomersPutRequest extends SpeakeasyBase {
    /**
     * Information of Customer to update.
     */
    customerDto: shared.CustomerDto;
    /**
     * Id of Customer to update.
     */
    id: number;
}
export declare class CustomersPutResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    customersPut200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
