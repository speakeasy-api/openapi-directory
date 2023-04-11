import { SpeakeasyBase } from "../../../internal/utils";
import { AwsSnsTopicSubscription } from "./awssnstopicsubscription";
/**
 * Provides information about an Amazon SNS topic to which notifications can be published.
 */
export declare class AwsSnsTopicDetails extends SpeakeasyBase {
    applicationSuccessFeedbackRoleArn?: string;
    firehoseFailureFeedbackRoleArn?: string;
    firehoseSuccessFeedbackRoleArn?: string;
    httpFailureFeedbackRoleArn?: string;
    httpSuccessFeedbackRoleArn?: string;
    kmsMasterKeyId?: string;
    owner?: string;
    sqsFailureFeedbackRoleArn?: string;
    sqsSuccessFeedbackRoleArn?: string;
    subscription?: AwsSnsTopicSubscription[];
    topicName?: string;
}
