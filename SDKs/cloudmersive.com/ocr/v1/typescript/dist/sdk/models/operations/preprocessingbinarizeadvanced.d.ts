import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PreprocessingBinarizeAdvancedSecurity extends SpeakeasyBase {
    apikey: string;
}
export declare class PreprocessingBinarizeAdvancedRequestBodyImageFile extends SpeakeasyBase {
    content: Uint8Array;
    imageFile: string;
}
export declare class PreprocessingBinarizeAdvancedRequestBody extends SpeakeasyBase {
    /**
     * Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.
     */
    imageFile: PreprocessingBinarizeAdvancedRequestBodyImageFile;
}
export declare class PreprocessingBinarizeAdvancedResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    preprocessingBinarizeAdvanced200ApplicationJSONByteString?: string;
    /**
     * OK
     */
    preprocessingBinarizeAdvanced200ApplicationXMLByteString?: string;
    /**
     * OK
     */
    preprocessingBinarizeAdvanced200TextJSONByteString?: string;
    /**
     * OK
     */
    preprocessingBinarizeAdvanced200TextXMLByteString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
