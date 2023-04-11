import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ZebraGETSecurity extends SpeakeasyBase {
    queryApiKey: string;
}
export declare class ZebraGETRequest extends SpeakeasyBase {
    /**
     * Most common is CODE_39 or QR_CODE
     */
    format: string;
    /**
     * Height of the barcode generated image
     */
    height?: number;
    /**
     * Show label of text below barcode
     */
    showlabel?: boolean;
    /**
     * Specify the text value you want to convert
     */
    value: string;
    /**
     * Width of the barcode generated image
     */
    width?: number;
}
export declare class ZebraGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An image of the generated barcode or QR code
     */
    zebraGET200ImagePngBinaryString?: Uint8Array;
}
