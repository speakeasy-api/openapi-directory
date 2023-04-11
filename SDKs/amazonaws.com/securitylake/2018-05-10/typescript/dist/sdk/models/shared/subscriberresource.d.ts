import { SpeakeasyBase } from "../../../internal/utils";
import { AccessTypeEnum } from "./accesstypeenum";
import { EndpointProtocolEnum } from "./endpointprotocolenum";
import { SourceType } from "./sourcetype";
import { SubscriptionStatusEnum } from "./subscriptionstatusenum";
/**
 * Provides details about the Amazon Security Lake account subscription. Subscribers are notified of new objects for a source as the data is written to your Amazon S3 bucket for Security Lake.
 */
export declare class SubscriberResource extends SpeakeasyBase {
    accessTypes?: AccessTypeEnum[];
    accountId: string;
    createdAt?: Date;
    externalId?: string;
    resourceShareArn?: string;
    resourceShareName?: string;
    roleArn?: string;
    s3BucketArn?: string;
    snsArn?: string;
    sourceTypes: SourceType[];
    subscriberDescription?: string;
    subscriberName?: string;
    subscriptionEndpoint?: string;
    subscriptionId: string;
    subscriptionProtocol?: EndpointProtocolEnum;
    subscriptionStatus?: SubscriptionStatusEnum;
    updatedAt?: Date;
}
