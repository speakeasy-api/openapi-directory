import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TaxApiDeleteFormRequest extends SpeakeasyBase {
    taxDeleteApiModel: shared.TaxDeleteApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class TaxApiDeleteFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taxApiDeleteForm200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    taxApiDeleteForm200TextJSONInt32Integer?: number;
}
