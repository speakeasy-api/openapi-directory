import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TaxApiNewFormRequest extends SpeakeasyBase {
    taxCreateApiModel: shared.TaxCreateApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class TaxApiNewFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taxApiNewForm200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    taxApiNewForm200TextJSONInt32Integer?: number;
}
