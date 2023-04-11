import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DownloadLabelFileSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class DownloadLabelFileRequest extends SpeakeasyBase {
    /**
     * This path parameter specifies the unique eBay-assigned ID of the shipment associated with the shipping label you want to download. The <b>shipmentId</b> value is generated and returned by a call to <b>createFromShippingQuote</b>.
     */
    shipmentId: string;
}
export declare class DownloadLabelFileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
