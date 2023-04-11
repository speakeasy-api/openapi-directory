import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPsd2RegistrationsRequest extends SpeakeasyBase {
    expand?: string;
}
/**
 * psd2registrations
 */
export declare class GetPsd2Registrations200ApplicationJSON extends SpeakeasyBase {
    psd2registrations: shared.Psd2Registration[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetPsd2RegistrationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * psd2registrations
     */
    getPsd2Registrations200ApplicationJSONObject?: GetPsd2Registrations200ApplicationJSON;
}
