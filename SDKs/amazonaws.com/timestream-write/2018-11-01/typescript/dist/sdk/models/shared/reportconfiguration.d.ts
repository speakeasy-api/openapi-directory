import { SpeakeasyBase } from "../../../internal/utils";
import { ReportS3Configuration } from "./reports3configuration";
/**
 * Report configuration for a batch load task. This contains details about where error reports are stored.
 */
export declare class ReportConfiguration extends SpeakeasyBase {
    reportS3Configuration?: ReportS3Configuration;
}
