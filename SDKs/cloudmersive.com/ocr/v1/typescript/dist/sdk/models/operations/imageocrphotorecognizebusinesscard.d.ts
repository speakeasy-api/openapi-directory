import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImageOcrPhotoRecognizeBusinessCardSecurity extends SpeakeasyBase {
    apikey: string;
}
export declare class ImageOcrPhotoRecognizeBusinessCardRequestBodyImageFile extends SpeakeasyBase {
    content: Uint8Array;
    imageFile: string;
}
export declare class ImageOcrPhotoRecognizeBusinessCardRequestBody extends SpeakeasyBase {
    /**
     * Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.
     */
    imageFile: ImageOcrPhotoRecognizeBusinessCardRequestBodyImageFile;
}
export declare class ImageOcrPhotoRecognizeBusinessCardResponse extends SpeakeasyBase {
    body?: Uint8Array;
    /**
     * OK
     */
    businessCardRecognitionResult?: shared.BusinessCardRecognitionResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
