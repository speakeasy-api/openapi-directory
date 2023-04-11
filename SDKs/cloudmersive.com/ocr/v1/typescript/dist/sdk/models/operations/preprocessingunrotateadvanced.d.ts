import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PreprocessingUnrotateAdvancedSecurity extends SpeakeasyBase {
    apikey: string;
}
export declare class PreprocessingUnrotateAdvancedRequestBodyImageFile extends SpeakeasyBase {
    content: Uint8Array;
    imageFile: string;
}
export declare class PreprocessingUnrotateAdvancedRequestBody extends SpeakeasyBase {
    /**
     * Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.
     */
    imageFile: PreprocessingUnrotateAdvancedRequestBodyImageFile;
}
export declare class PreprocessingUnrotateAdvancedResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    preprocessingUnrotateAdvanced200ApplicationJSONByteString?: string;
    /**
     * OK
     */
    preprocessingUnrotateAdvanced200ApplicationXMLByteString?: string;
    /**
     * OK
     */
    preprocessingUnrotateAdvanced200TextJSONByteString?: string;
    /**
     * OK
     */
    preprocessingUnrotateAdvanced200TextXMLByteString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
