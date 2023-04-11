import { SpeakeasyBase } from "../../../internal/utils";
import { AdvancedEventSelector } from "./advancedeventselector";
import { EventDataStoreStatusEnum } from "./eventdatastorestatusenum";
/**
 * A storage lake of event data against which you can run complex SQL-based queries. An event data store can include events that you have logged on your account from the last 90 to 2557 days (about three months to up to seven years). To select events for an event data store, use <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html#creating-data-event-selectors-advanced">advanced event selectors</a>.
 */
export declare class EventDataStore extends SpeakeasyBase {
    advancedEventSelectors?: AdvancedEventSelector[];
    createdTimestamp?: Date;
    eventDataStoreArn?: string;
    multiRegionEnabled?: boolean;
    name?: string;
    organizationEnabled?: boolean;
    retentionPeriod?: number;
    status?: EventDataStoreStatusEnum;
    terminationProtectionEnabled?: boolean;
    updatedTimestamp?: Date;
}
