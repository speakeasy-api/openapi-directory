import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PreprocessingUnrotateSecurity extends SpeakeasyBase {
    apikey: string;
}
export declare class PreprocessingUnrotateRequestBodyImageFile extends SpeakeasyBase {
    content: Uint8Array;
    imageFile: string;
}
export declare class PreprocessingUnrotateRequestBody extends SpeakeasyBase {
    /**
     * Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.
     */
    imageFile: PreprocessingUnrotateRequestBodyImageFile;
}
export declare class PreprocessingUnrotateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    preprocessingUnrotate200ApplicationJSONByteString?: string;
    /**
     * OK
     */
    preprocessingUnrotate200ApplicationXMLByteString?: string;
    /**
     * OK
     */
    preprocessingUnrotate200TextJSONByteString?: string;
    /**
     * OK
     */
    preprocessingUnrotate200TextXMLByteString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
