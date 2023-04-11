import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Amazon S3 destination where errors associated with the job creation request are saved.
 */
export declare class ErrorReportLocation extends SpeakeasyBase {
    bucket: string;
    prefix: string;
}
