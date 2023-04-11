import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostApiInvoiceDeletecategoryRawRequest extends SpeakeasyBase {
    requestBody: Uint8Array;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class PostApiInvoiceDeletecategoryRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postApiInvoiceDeletecategoryRaw200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    postApiInvoiceDeletecategoryRaw200TextJSONInt32Integer?: number;
}
