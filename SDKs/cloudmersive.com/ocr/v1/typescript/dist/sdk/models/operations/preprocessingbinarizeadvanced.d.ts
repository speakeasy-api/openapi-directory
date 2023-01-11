import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PreprocessingBinarizeAdvancedRequestBodyImageFile extends SpeakeasyBase {
    content: Uint8Array;
    imageFile: string;
}
export declare class PreprocessingBinarizeAdvancedRequestBody extends SpeakeasyBase {
    imageFile: PreprocessingBinarizeAdvancedRequestBodyImageFile;
}
export declare class PreprocessingBinarizeAdvancedSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class PreprocessingBinarizeAdvancedRequest extends SpeakeasyBase {
    request: PreprocessingBinarizeAdvancedRequestBody;
    security: PreprocessingBinarizeAdvancedSecurity;
}
export declare class PreprocessingBinarizeAdvancedResponse extends SpeakeasyBase {
    contentType: string;
    preprocessingBinarizeAdvanced200ApplicationJSONByteString?: string;
    preprocessingBinarizeAdvanced200ApplicationXMLByteString?: string;
    preprocessingBinarizeAdvanced200TextJSONByteString?: string;
    preprocessingBinarizeAdvanced200TextXMLByteString?: string;
    statusCode: number;
}
