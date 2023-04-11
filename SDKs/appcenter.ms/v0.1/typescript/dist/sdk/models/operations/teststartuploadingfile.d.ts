import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TestStartUploadingFileSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class TestStartUploadingFileRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * The ID of the test run
     */
    testRunId: string;
}
export declare class TestStartUploadingFileResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
