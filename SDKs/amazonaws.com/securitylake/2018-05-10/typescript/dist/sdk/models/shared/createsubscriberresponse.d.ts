import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class CreateSubscriberResponse extends SpeakeasyBase {
    resourceShareArn?: string;
    resourceShareName?: string;
    roleArn?: string;
    s3BucketArn?: string;
    snsArn?: string;
    subscriptionId: string;
}
