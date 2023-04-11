import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OrderApiGetPatchableFieldsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    orderApiGetPatchableFields200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    orderApiGetPatchableFields200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
