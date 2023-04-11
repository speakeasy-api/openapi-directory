import { SpeakeasyBase } from "../../../internal/utils";
import { OSRelease } from "./osrelease";
import { SimplifiedApplication } from "./simplifiedapplication";
/**
 * Success
 */
export declare class DescribeReleaseLabelOutput extends SpeakeasyBase {
    applications?: SimplifiedApplication[];
    availableOSReleases?: OSRelease[];
    nextToken?: string;
    releaseLabel?: string;
}
