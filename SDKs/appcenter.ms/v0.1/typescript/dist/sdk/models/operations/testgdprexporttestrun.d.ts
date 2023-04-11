import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TestGdprExportTestRunSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class TestGdprExportTestRunRequest extends SpeakeasyBase {
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
export declare class TestGdprExportTestRun200ApplicationJSON extends SpeakeasyBase {
    appHashFileId?: string;
    appHashFileUrl?: string;
    appIconUrl?: string;
    dsymHashFileId?: string;
    dsymHashFileUrl?: string;
    id?: string;
    locale?: string;
}
export declare class TestGdprExportTestRunResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    testGdprExportTestRun200ApplicationJSONObject?: TestGdprExportTestRun200ApplicationJSON;
}
