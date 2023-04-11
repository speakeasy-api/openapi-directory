import { SpeakeasyBase } from "../../../internal/utils";
import { AdvancedEventSelector } from "./advancedeventselector";
import { EventDataStoreStatusEnum } from "./eventdatastorestatusenum";
/**
 * Success
 */
export declare class RestoreEventDataStoreResponse extends SpeakeasyBase {
    advancedEventSelectors?: AdvancedEventSelector[];
    createdTimestamp?: Date;
    eventDataStoreArn?: string;
    kmsKeyId?: string;
    multiRegionEnabled?: boolean;
    name?: string;
    organizationEnabled?: boolean;
    retentionPeriod?: number;
    status?: EventDataStoreStatusEnum;
    terminationProtectionEnabled?: boolean;
    updatedTimestamp?: Date;
}
