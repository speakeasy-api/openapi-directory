import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PreprocessingGetPageAngleSecurity extends SpeakeasyBase {
    apikey: string;
}
export declare class PreprocessingGetPageAngleRequestBodyImageFile extends SpeakeasyBase {
    content: Uint8Array;
    imageFile: string;
}
export declare class PreprocessingGetPageAngleRequestBody extends SpeakeasyBase {
    /**
     * Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.
     */
    imageFile: PreprocessingGetPageAngleRequestBodyImageFile;
}
export declare class PreprocessingGetPageAngleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    getPageAngleResult?: shared.GetPageAngleResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
