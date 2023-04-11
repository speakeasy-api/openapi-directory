import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TestUploadHashesBatchSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * Type of the file
 */
export declare enum TestUploadHashesBatchTestCloudFileHashFileTypeEnum {
    DsymFile = "dsym-file",
    AppFile = "app-file",
    TestFile = "test-file"
}
/**
 * Hash, type, path and byte range of a file that is required in test run
 */
export declare class TestUploadHashesBatchTestCloudFileHash extends SpeakeasyBase {
    /**
     * SHA256 hash of the file
     */
    checksum: string;
    /**
     * Type of the file
     */
    fileType: TestUploadHashesBatchTestCloudFileHashFileTypeEnum;
    /**
     * Relative path of the file
     */
    relativePath: string;
}
export declare class TestUploadHashesBatchRequest extends SpeakeasyBase {
    /**
     * File hash information
     */
    requestBody: TestUploadHashesBatchTestCloudFileHash[];
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
/**
 * Type of the file
 */
export declare enum TestUploadHashesBatchTestCloudFileHashResponseFileTypeEnum {
    DsymFile = "dsym-file",
    AppFile = "app-file",
    TestFile = "test-file"
}
/**
 * Status of the upload
 */
export declare class TestUploadHashesBatchTestCloudFileHashResponseTestCloudHashUploadStatus extends SpeakeasyBase {
    /**
     * URI that should be used to make POST request if file with given hash doesn't exist. This is set when status_code is equal to 412
     */
    location?: string;
    /**
     * HTTP status code that represent result of upload
     */
    statusCode: number;
}
/**
 * Response message for single uploaded file hash
 */
export declare class TestUploadHashesBatchTestCloudFileHashResponse extends SpeakeasyBase {
    /**
     * SHA256 hash of the file
     */
    checksum: string;
    /**
     * Type of the file
     */
    fileType: TestUploadHashesBatchTestCloudFileHashResponseFileTypeEnum;
    /**
     * Relative path of the file
     */
    relativePath?: string;
    /**
     * Status of the upload
     */
    uploadStatus: TestUploadHashesBatchTestCloudFileHashResponseTestCloudHashUploadStatus;
}
export declare class TestUploadHashesBatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    testCloudFileHashResponses?: TestUploadHashesBatchTestCloudFileHashResponse[];
}
