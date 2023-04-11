import { SpeakeasyBase } from "../../../internal/utils";
import { ExperimentReportNameEnum } from "./experimentreportnameenum";
/**
 * A structure that contains results of an experiment.
 */
export declare class ExperimentReport extends SpeakeasyBase {
    content?: string;
    metricName?: string;
    reportName?: ExperimentReportNameEnum;
    treatmentName?: string;
}
