import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://crossbrowsertesting.com/api/v3"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * What's in this version:
 *
 * @remarks
 *  1. Compare two screenshots for layout differences
 *  2. Compare a full screenshot test of browsers to a single baseline browser for layout differences.
 *  3. Compare a screenshot test version to another test version - good for regression tests.
 *  4. Get links to the Comparison UI for visual representation of layout differences
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Compare Screenshot Test Versions
     *
     * @remarks
     * Get comparison results for all browsers in target screenshot test against the same browser in the base screenshot test. This is a good method for regression testing. For example, you've run a screenshot test against a set of browsers that is "good". Then, after some changes, you run a new screenshot test against the same set of browsers. This method will compare each of the same browsers against each other. For example, IE9 will be compared to IE9 from an earlier test. This is a many-to-many comparison where the OS/Browser/Resolution must match between the two test versions in order for the comparison to return results. The two versions can be from the same screenshot_test_id or not.
     */
    getScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionId(req: operations.GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdRequest, security: operations.GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdResponse>;
    /**
     * Compare Full Screenshot Test
     *
     * @remarks
     * Get comparison results for all browsers in target screenshot test against a base screenshot result. The base result can be from the same test or from another test run at an earlier time. This is a one-to-many comparison.
     */
    getScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonBaseResultId(req: operations.GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonBaseResultIdRequest, security: operations.GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonBaseResultIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonBaseResultIdResponse>;
    /**
     * Compare Single Screenshot
     *
     * @remarks
     * Get comparison results for a single target screenshot result against a base screenshot result. This is a one-to-one comparison.
     */
    getScreenshotsTargetScreenshotTestIdTargetVersionIdTargetResultIdComparisonBaseResultId(req: operations.GetScreenshotsTargetScreenshotTestIdTargetVersionIdTargetResultIdComparisonBaseResultIdRequest, security: operations.GetScreenshotsTargetScreenshotTestIdTargetVersionIdTargetResultIdComparisonBaseResultIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetScreenshotsTargetScreenshotTestIdTargetVersionIdTargetResultIdComparisonBaseResultIdResponse>;
}
