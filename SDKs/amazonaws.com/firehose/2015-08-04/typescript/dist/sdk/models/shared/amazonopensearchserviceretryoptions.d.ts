import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon OpenSearch Service.
 */
export declare class AmazonopensearchserviceRetryOptions extends SpeakeasyBase {
    durationInSeconds?: number;
}
