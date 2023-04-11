import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetScreenshotsTargetScreenshotTestIdTargetVersionIdTargetResultIdComparisonBaseResultIdSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetScreenshotsTargetScreenshotTestIdTargetVersionIdTargetResultIdComparisonBaseResultIdRequest extends SpeakeasyBase {
    /**
     * result id of the base Screenshot Test
     */
    baseResultId: number;
    /**
     * Name of callback method for JSONP requests.
     */
    callback?: string;
    /**
     * The format of the returned data. Possible values are "json" or "jsonp".
     */
    format?: string;
    /**
     * result id of the target Screenshot Test
     */
    targetResultId: number;
    /**
     * test id of the target Screenshot Test
     */
    targetScreenshotTestId: number;
    /**
     * version id of the target Screenshot Test
     */
    targetVersionId: number;
    /**
     * Used as the basis for detecting box model differences in element positioning and dimensions that should be flagged and reported back to the comparison results. The default is 30px which is a good basis for finding notable layout differences.
     */
    tolerance?: number;
}
export declare class GetScreenshotsTargetScreenshotTestIdTargetVersionIdTargetResultIdComparisonBaseResultIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An array of Configuration objects. Within each configuration is an array of browsers
     */
    singleComparisonTest?: shared.SingleComparisonTest;
}
