import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PreprocessingUnskewSecurity extends SpeakeasyBase {
    apikey: string;
}
export declare class PreprocessingUnskewRequestBodyImageFile extends SpeakeasyBase {
    content: Uint8Array;
    imageFile: string;
}
export declare class PreprocessingUnskewRequestBody extends SpeakeasyBase {
    /**
     * Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.
     */
    imageFile: PreprocessingUnskewRequestBodyImageFile;
}
export declare class PreprocessingUnskewResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    preprocessingUnskew200ApplicationJSONByteString?: string;
    /**
     * OK
     */
    preprocessingUnskew200ApplicationXMLByteString?: string;
    /**
     * OK
     */
    preprocessingUnskew200TextJSONByteString?: string;
    /**
     * OK
     */
    preprocessingUnskew200TextXMLByteString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
