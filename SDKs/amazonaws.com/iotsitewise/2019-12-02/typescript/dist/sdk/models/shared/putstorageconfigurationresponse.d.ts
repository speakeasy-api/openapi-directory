import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationStatus } from "./configurationstatus";
import { DisassociatedDataStorageStateEnum } from "./disassociateddatastoragestateenum";
import { MultiLayerStorage } from "./multilayerstorage";
import { RetentionPeriod } from "./retentionperiod";
import { StorageTypeEnum } from "./storagetypeenum";
/**
 * Success
 */
export declare class PutStorageConfigurationResponse extends SpeakeasyBase {
    /**
     * Contains current status information for the configuration.
     */
    configurationStatus: ConfigurationStatus;
    disassociatedDataStorage?: DisassociatedDataStorageStateEnum;
    multiLayerStorage?: MultiLayerStorage;
    /**
     * How many days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.
     */
    retentionPeriod?: RetentionPeriod;
    storageType: StorageTypeEnum;
}
