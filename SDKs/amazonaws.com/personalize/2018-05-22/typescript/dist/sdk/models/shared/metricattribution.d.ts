import { SpeakeasyBase } from "../../../internal/utils";
import { MetricAttributionOutput } from "./metricattributionoutput";
/**
 * Contains information on a metric attribution. A metric attribution creates reports on the data that you import into Amazon Personalize. Depending on how you import the data, you can view reports in Amazon CloudWatch or Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>.
 */
export declare class MetricAttribution extends SpeakeasyBase {
    creationDateTime?: Date;
    datasetGroupArn?: string;
    failureReason?: string;
    lastUpdatedDateTime?: Date;
    metricAttributionArn?: string;
    metricsOutputConfig?: MetricAttributionOutput;
    name?: string;
    status?: string;
}
