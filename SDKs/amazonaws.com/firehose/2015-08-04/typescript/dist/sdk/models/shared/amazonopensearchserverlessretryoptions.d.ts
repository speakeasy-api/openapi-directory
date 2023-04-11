import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to the Serverless offering for Amazon OpenSearch Service.
 */
export declare class AmazonOpenSearchServerlessRetryOptions extends SpeakeasyBase {
    durationInSeconds?: number;
}
