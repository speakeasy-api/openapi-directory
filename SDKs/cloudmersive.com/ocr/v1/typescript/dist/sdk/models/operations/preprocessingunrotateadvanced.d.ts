import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PreprocessingUnrotateAdvancedRequestBodyImageFile extends SpeakeasyBase {
    content: Uint8Array;
    imageFile: string;
}
export declare class PreprocessingUnrotateAdvancedRequestBody extends SpeakeasyBase {
    imageFile: PreprocessingUnrotateAdvancedRequestBodyImageFile;
}
export declare class PreprocessingUnrotateAdvancedSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class PreprocessingUnrotateAdvancedRequest extends SpeakeasyBase {
    request: PreprocessingUnrotateAdvancedRequestBody;
    security: PreprocessingUnrotateAdvancedSecurity;
}
export declare class PreprocessingUnrotateAdvancedResponse extends SpeakeasyBase {
    contentType: string;
    preprocessingUnrotateAdvanced200ApplicationJSONByteString?: string;
    preprocessingUnrotateAdvanced200ApplicationXMLByteString?: string;
    preprocessingUnrotateAdvanced200TextJSONByteString?: string;
    preprocessingUnrotateAdvanced200TextXMLByteString?: string;
    statusCode: number;
}
