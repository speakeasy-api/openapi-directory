import { SpeakeasyBase } from "../../../internal/utils";
import { Alias } from "./alias";
import { EdgeStatistics } from "./edgestatistics";
import { HistogramEntry } from "./histogramentry";
/**
 * Information about a connection between two services. An edge can be a synchronous connection, such as typical call between client and service, or an asynchronous link, such as a Lambda function which retrieves an event from an SNS queue.
 */
export declare class Edge extends SpeakeasyBase {
    aliases?: Alias[];
    edgeType?: string;
    endTime?: Date;
    receivedEventAgeHistogram?: HistogramEntry[];
    referenceId?: number;
    responseTimeHistogram?: HistogramEntry[];
    startTime?: Date;
    summaryStatistics?: EdgeStatistics;
}
