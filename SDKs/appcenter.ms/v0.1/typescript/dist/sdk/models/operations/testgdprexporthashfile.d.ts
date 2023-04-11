import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TestGdprExportHashFileSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class TestGdprExportHashFileRequest extends SpeakeasyBase {
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
export declare class TestGdprExportHashFile200ApplicationJSON extends SpeakeasyBase {
    filename?: string;
    id?: string;
}
export declare class TestGdprExportHashFileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    testGdprExportHashFile200ApplicationJSONObject?: TestGdprExportHashFile200ApplicationJSON;
}
