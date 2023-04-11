import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * OK
 */
export declare class TestGdprExportFeatureFlag200ApplicationJSON extends SpeakeasyBase {
    name?: string;
    targetId?: string;
}
export declare class TestGdprExportFeatureFlagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    testGdprExportFeatureFlag200ApplicationJSONObject?: TestGdprExportFeatureFlag200ApplicationJSON;
}
