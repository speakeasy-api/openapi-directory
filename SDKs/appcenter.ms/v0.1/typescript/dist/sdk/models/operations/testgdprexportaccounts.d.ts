import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TestGdprExportAccounts200ApplicationJSONResources extends SpeakeasyBase {
    path?: string;
    rel?: string;
}
/**
 * OK
 */
export declare class TestGdprExportAccounts200ApplicationJSON extends SpeakeasyBase {
    resources?: TestGdprExportAccounts200ApplicationJSONResources[];
}
export declare class TestGdprExportAccountsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    testGdprExportAccounts200ApplicationJSONObject?: TestGdprExportAccounts200ApplicationJSON;
}
