import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class FileAssetsCreateSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class FileAssetsCreateRequest extends SpeakeasyBase {
    requestBody?: Record<string, any>;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
/**
 * Bad Request
 */
export declare class FileAssetsCreateDefaultApplicationJSON extends SpeakeasyBase {
    code: string;
    id: string;
    message: string;
}
/**
 * Success
 */
export declare class FileAssetsCreate200ApplicationJSON extends SpeakeasyBase {
    id?: string;
    location?: string;
    token?: string;
    uploadDomain?: string;
    uploadWindowLocation?: string;
    urlEncodedToken?: string;
}
export declare class FileAssetsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    fileAssetsCreate200ApplicationJSONObject?: FileAssetsCreate200ApplicationJSON;
    /**
     * Bad Request
     */
    fileAssetsCreateDefaultApplicationJSONObject?: FileAssetsCreateDefaultApplicationJSON;
}
