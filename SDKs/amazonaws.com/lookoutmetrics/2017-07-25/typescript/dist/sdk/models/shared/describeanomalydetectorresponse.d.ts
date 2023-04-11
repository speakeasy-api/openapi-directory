import { SpeakeasyBase } from "../../../internal/utils";
import { AnomalyDetectorConfigSummary } from "./anomalydetectorconfigsummary";
import { AnomalyDetectorFailureTypeEnum } from "./anomalydetectorfailuretypeenum";
import { AnomalyDetectorStatusEnum } from "./anomalydetectorstatusenum";
/**
 * Success
 */
export declare class DescribeAnomalyDetectorResponse extends SpeakeasyBase {
    anomalyDetectorArn?: string;
    anomalyDetectorConfig?: AnomalyDetectorConfigSummary;
    anomalyDetectorDescription?: string;
    anomalyDetectorName?: string;
    creationTime?: Date;
    failureReason?: string;
    failureType?: AnomalyDetectorFailureTypeEnum;
    kmsKeyArn?: string;
    lastModificationTime?: Date;
    status?: AnomalyDetectorStatusEnum;
}
