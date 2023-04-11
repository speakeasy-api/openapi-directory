import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationDetail } from "./applicationdetail";
/**
 * Success
 */
export declare class DescribeApplicationVersionResponse extends SpeakeasyBase {
    /**
     * Describes the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configurations.
     */
    applicationVersionDetail?: ApplicationDetail;
}
