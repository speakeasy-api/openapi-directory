import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TaxApiNewJsonRequest extends SpeakeasyBase {
    taxCreateApiModel: shared.TaxCreateApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class TaxApiNewJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taxApiNewJSON200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    taxApiNewJSON200TextJSONInt32Integer?: number;
}
