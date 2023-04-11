import { SpeakeasyBase } from "../../../internal/utils";
import { AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails } from "./awscodebuildprojectlogsconfigcloudwatchlogsdetails";
import { AwsCodeBuildProjectLogsConfigS3LogsDetails } from "./awscodebuildprojectlogsconfigs3logsdetails";
/**
 * Information about logs for the build project.
 */
export declare class AwsCodeBuildProjectLogsConfigDetails extends SpeakeasyBase {
    cloudWatchLogs?: AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails;
    s3Logs?: AwsCodeBuildProjectLogsConfigS3LogsDetails;
}
