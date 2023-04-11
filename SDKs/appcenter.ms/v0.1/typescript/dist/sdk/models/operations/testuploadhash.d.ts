import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TestUploadHashSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * Type of the file
 */
export declare enum TestUploadHashTestCloudFileHashFileTypeEnum {
    DsymFile = "dsym-file",
    AppFile = "app-file",
    TestFile = "test-file"
}
/**
 * Hash, type, path and byte range of a file that is required in test run
 */
export declare class TestUploadHashTestCloudFileHash extends SpeakeasyBase {
    /**
     * Range of bytes required to verify ownership of the file
     */
    byteRange?: string;
    /**
     * SHA256 hash of the file
     */
    checksum: string;
    /**
     * Type of the file
     */
    fileType: TestUploadHashTestCloudFileHashFileTypeEnum;
    /**
     * Relative path of the file
     */
    relativePath: string;
}
export declare class TestUploadHashRequest extends SpeakeasyBase {
    /**
     * File hash information
     */
    requestBody: TestUploadHashTestCloudFileHash;
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
export declare class TestUploadHashResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
