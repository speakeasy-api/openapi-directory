import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CustomFieldsUploadSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class CustomFieldsUploadRequestBodyExternalFile extends SpeakeasyBase {
    content: Uint8Array;
    externalFile: string;
}
export declare class CustomFieldsUploadRequestBody extends SpeakeasyBase {
    /**
     * CSV file to be uploaded
     */
    externalFile?: CustomFieldsUploadRequestBodyExternalFile;
}
export declare class CustomFieldsUploadRequest extends SpeakeasyBase {
    requestBody?: CustomFieldsUploadRequestBody;
    /**
     * Custom field identifier
     */
    customFieldId: number;
}
export declare class CustomFieldsUploadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    customFieldsUpload200ApplicationJSONObject?: Record<string, any>;
}
