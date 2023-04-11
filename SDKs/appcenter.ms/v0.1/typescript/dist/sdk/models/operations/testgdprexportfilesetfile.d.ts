import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TestGdprExportFileSetFileSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class TestGdprExportFileSetFileRequest extends SpeakeasyBase {
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
 * OK
 */
export declare class TestGdprExportFileSetFile200ApplicationJSON extends SpeakeasyBase {
    appUploadId?: string;
    hashFileId?: string;
    hashFileUrl?: string;
    path?: string;
}
export declare class TestGdprExportFileSetFileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    testGdprExportFileSetFile200ApplicationJSONObject?: TestGdprExportFileSetFile200ApplicationJSON;
}
