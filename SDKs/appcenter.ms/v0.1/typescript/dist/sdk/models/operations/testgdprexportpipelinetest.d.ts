import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TestGdprExportPipelineTestSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class TestGdprExportPipelineTestRequest extends SpeakeasyBase {
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
export declare class TestGdprExportPipelineTest200ApplicationJSON extends SpeakeasyBase {
    appUploadId?: string;
    testParameters?: Record<string, any>;
}
export declare class TestGdprExportPipelineTestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    testGdprExportPipelineTest200ApplicationJSONObject?: TestGdprExportPipelineTest200ApplicationJSON;
}
