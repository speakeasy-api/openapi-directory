import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TestGdprExportAppSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class TestGdprExportAppRequest extends SpeakeasyBase {
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
export declare class TestGdprExportApp200ApplicationJSON extends SpeakeasyBase {
    hashFilesUrl?: string;
}
export declare class TestGdprExportAppResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    testGdprExportApp200ApplicationJSONObject?: TestGdprExportApp200ApplicationJSON;
}
