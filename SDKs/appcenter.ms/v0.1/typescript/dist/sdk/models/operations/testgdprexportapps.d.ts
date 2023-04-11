import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TestGdprExportAppsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class TestGdprExportAppsRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare class TestGdprExportApps200ApplicationJSONResources extends SpeakeasyBase {
    path?: string;
    rel?: string;
}
/**
 * OK
 */
export declare class TestGdprExportApps200ApplicationJSON extends SpeakeasyBase {
    resources?: TestGdprExportApps200ApplicationJSONResources[];
}
export declare class TestGdprExportAppsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    testGdprExportApps200ApplicationJSONObject?: TestGdprExportApps200ApplicationJSON;
}
