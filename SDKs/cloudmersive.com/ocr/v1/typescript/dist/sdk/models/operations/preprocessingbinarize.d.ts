import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PreprocessingBinarizeSecurity extends SpeakeasyBase {
    apikey: string;
}
export declare class PreprocessingBinarizeRequestBodyImageFile extends SpeakeasyBase {
    content: Uint8Array;
    imageFile: string;
}
export declare class PreprocessingBinarizeRequestBody extends SpeakeasyBase {
    /**
     * Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.
     */
    imageFile: PreprocessingBinarizeRequestBodyImageFile;
}
export declare class PreprocessingBinarizeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    preprocessingBinarize200ApplicationJSONByteString?: string;
    /**
     * OK
     */
    preprocessingBinarize200ApplicationXMLByteString?: string;
    /**
     * OK
     */
    preprocessingBinarize200TextJSONByteString?: string;
    /**
     * OK
     */
    preprocessingBinarize200TextXMLByteString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
