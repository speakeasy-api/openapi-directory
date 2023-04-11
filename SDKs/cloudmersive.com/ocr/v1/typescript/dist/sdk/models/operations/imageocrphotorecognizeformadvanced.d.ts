import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImageOcrPhotoRecognizeFormAdvancedSecurity extends SpeakeasyBase {
    apikey: string;
}
export declare class ImageOcrPhotoRecognizeFormAdvancedRequestBodyImageFile extends SpeakeasyBase {
    content: Uint8Array;
    imageFile: string;
}
export declare class ImageOcrPhotoRecognizeFormAdvancedRequestBody extends SpeakeasyBase {
    /**
     * Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.
     */
    imageFile: ImageOcrPhotoRecognizeFormAdvancedRequestBodyImageFile;
}
export declare class ImageOcrPhotoRecognizeFormAdvancedRequest extends SpeakeasyBase {
    requestBody: ImageOcrPhotoRecognizeFormAdvancedRequestBody;
    /**
     * Bucket ID of the Configuration Bucket storing the form templates
     */
    bucketID?: string;
    /**
     * Bucket Secret Key of the Configuration Bucket storing the form templates
     */
    bucketSecretKey?: string;
    /**
     * Optional, diagnostics mode, default is 'false'.  Possible values are 'true' (will set DiagnosticImage to a diagnostic PNG image in the result), and 'false' (no diagnostics are enabled; this is recommended for best performance).
     */
    diagnostics?: string;
    /**
     * Optional, preprocessing mode, default is 'Auto'.  Possible values are None (no preprocessing of the image), and Auto (automatic image enhancement of the image - including automatic unrotation of the image - before OCR is applied; this is recommended).  Set this to 'None' if you do not want to use automatic image unrotation and enhancement.
     */
    preprocessing?: string;
    /**
     * Optional, enable advanced recognition mode by specifying 'Advanced', enable handwriting recognition by specifying 'EnableHandwriting'.  Default is disabled.
     */
    recognitionMode?: string;
}
export declare class ImageOcrPhotoRecognizeFormAdvancedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    formRecognitionResult?: shared.FormRecognitionResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
