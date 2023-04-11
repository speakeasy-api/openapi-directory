import { SpeakeasyBase } from "../../../internal/utils";
import { AppFlowConfig } from "./appflowconfig";
import { AthenaSourceConfig } from "./athenasourceconfig";
import { CloudWatchConfig } from "./cloudwatchconfig";
import { RDSSourceConfig } from "./rdssourceconfig";
import { RedshiftSourceConfig } from "./redshiftsourceconfig";
import { S3SourceConfig } from "./s3sourceconfig";
/**
 * Contains information about source data used to generate metrics.
 */
export declare class MetricSource extends SpeakeasyBase {
    appFlowConfig?: AppFlowConfig;
    athenaSourceConfig?: AthenaSourceConfig;
    cloudWatchConfig?: CloudWatchConfig;
    rdsSourceConfig?: RDSSourceConfig;
    redshiftSourceConfig?: RedshiftSourceConfig;
    /**
     * Contains information about the configuration of the S3 bucket that contains source files.
     */
    s3SourceConfig?: S3SourceConfig;
}
