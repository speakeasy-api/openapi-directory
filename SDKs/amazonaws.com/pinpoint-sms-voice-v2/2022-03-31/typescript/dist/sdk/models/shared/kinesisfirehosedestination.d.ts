import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Contains the delivery stream Amazon Resource Name (ARN), and the ARN of the Identity and Access Management (IAM) role associated with an Kinesis Data Firehose event destination.</p> <p>Event destinations, such as Kinesis Data Firehose, are associated with configuration sets, which enable you to publish message sending events.</p>
 */
export declare class KinesisFirehoseDestination extends SpeakeasyBase {
    deliveryStreamArn: string;
    iamRoleArn: string;
}
