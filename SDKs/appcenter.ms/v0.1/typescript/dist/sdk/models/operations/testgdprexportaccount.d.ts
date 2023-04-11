import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * OK
 */
export declare class TestGdprExportAccount200ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class TestGdprExportAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    testGdprExportAccount200ApplicationJSONObject?: TestGdprExportAccount200ApplicationJSON;
}
