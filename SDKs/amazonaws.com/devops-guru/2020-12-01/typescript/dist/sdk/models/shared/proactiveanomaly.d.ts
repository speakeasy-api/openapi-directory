import { SpeakeasyBase } from "../../../internal/utils";
import { AnomalyReportedTimeRange } from "./anomalyreportedtimerange";
import { AnomalyResource } from "./anomalyresource";
import { AnomalySeverityEnum } from "./anomalyseverityenum";
import { AnomalySourceDetails } from "./anomalysourcedetails";
import { AnomalySourceMetadata } from "./anomalysourcemetadata";
import { AnomalyStatusEnum } from "./anomalystatusenum";
import { AnomalyTimeRange } from "./anomalytimerange";
import { PredictionTimeRange } from "./predictiontimerange";
import { ResourceCollection } from "./resourcecollection";
/**
 * Information about an anomaly. This object is returned by <code>ListAnomalies</code>.
 */
export declare class ProactiveAnomaly extends SpeakeasyBase {
    anomalyReportedTimeRange?: AnomalyReportedTimeRange;
    anomalyResources?: AnomalyResource[];
    /**
     *  A time range that specifies when the observed unusual behavior in an anomaly started and ended. This is different from <code>AnomalyReportedTimeRange</code>, which specifies the time range when DevOps Guru opens and then closes an anomaly.
     */
    anomalyTimeRange?: AnomalyTimeRange;
    associatedInsightId?: string;
    description?: string;
    id?: string;
    limit?: number;
    /**
     *  The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur.
     */
    predictionTimeRange?: PredictionTimeRange;
    /**
     *  A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks.
     */
    resourceCollection?: ResourceCollection;
    severity?: AnomalySeverityEnum;
    sourceDetails?: AnomalySourceDetails;
    sourceMetadata?: AnomalySourceMetadata;
    status?: AnomalyStatusEnum;
    updateTime?: Date;
}
