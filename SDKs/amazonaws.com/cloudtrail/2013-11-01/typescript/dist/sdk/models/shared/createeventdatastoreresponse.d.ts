import { SpeakeasyBase } from "../../../internal/utils";
import { AdvancedEventSelector } from "./advancedeventselector";
import { EventDataStoreStatusEnum } from "./eventdatastorestatusenum";
import { Tag } from "./tag";
/**
 * Success
 */
export declare class CreateEventDataStoreResponse extends SpeakeasyBase {
    advancedEventSelectors?: AdvancedEventSelector[];
    createdTimestamp?: Date;
    eventDataStoreArn?: string;
    kmsKeyId?: string;
    multiRegionEnabled?: boolean;
    name?: string;
    organizationEnabled?: boolean;
    retentionPeriod?: number;
    status?: EventDataStoreStatusEnum;
    /**
     * A list of tags.
     */
    tagsList?: Tag[];
    terminationProtectionEnabled?: boolean;
    updatedTimestamp?: Date;
}
