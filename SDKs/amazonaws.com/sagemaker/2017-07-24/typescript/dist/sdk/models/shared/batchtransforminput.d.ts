import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringDatasetFormat } from "./monitoringdatasetformat";
import { ProcessingS3DataDistributionTypeEnum } from "./processings3datadistributiontypeenum";
import { ProcessingS3InputModeEnum } from "./processings3inputmodeenum";
/**
 * Input object for the batch transform job.
 */
export declare class BatchTransformInput extends SpeakeasyBase {
    dataCapturedDestinationS3Uri: string;
    datasetFormat: MonitoringDatasetFormat;
    endTimeOffset?: string;
    featuresAttribute?: string;
    inferenceAttribute?: string;
    localPath: string;
    probabilityAttribute?: string;
    probabilityThresholdAttribute?: number;
    s3DataDistributionType?: ProcessingS3DataDistributionTypeEnum;
    s3InputMode?: ProcessingS3InputModeEnum;
    startTimeOffset?: string;
}
