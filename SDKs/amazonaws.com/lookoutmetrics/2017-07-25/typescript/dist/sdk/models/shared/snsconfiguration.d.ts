import { SpeakeasyBase } from "../../../internal/utils";
import { SnsFormatEnum } from "./snsformatenum";
/**
 * Contains information about the SNS topic to which you want to send your alerts and the IAM role that has access to that topic.
 */
export declare class SNSConfiguration extends SpeakeasyBase {
    roleArn: string;
    snsFormat?: SnsFormatEnum;
    snsTopicArn: string;
}
