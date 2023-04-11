import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TaxApiDeleteJsonRequest extends SpeakeasyBase {
    taxDeleteApiModel: shared.TaxDeleteApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class TaxApiDeleteJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taxApiDeleteJSON200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    taxApiDeleteJSON200TextJSONInt32Integer?: number;
}
