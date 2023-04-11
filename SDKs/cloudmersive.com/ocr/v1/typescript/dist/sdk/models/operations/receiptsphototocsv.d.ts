import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReceiptsPhotoToCSVSecurity extends SpeakeasyBase {
    apikey: string;
}
export declare class ReceiptsPhotoToCSVRequestBodyImageFile extends SpeakeasyBase {
    content: Uint8Array;
    imageFile: string;
}
export declare class ReceiptsPhotoToCSVRequestBody extends SpeakeasyBase {
    /**
     * Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.
     */
    imageFile: ReceiptsPhotoToCSVRequestBodyImageFile;
}
export declare class ReceiptsPhotoToCSVResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    receiptsPhotoToCSV200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    receiptsPhotoToCSV200TextJSONObject?: Record<string, any>;
}
