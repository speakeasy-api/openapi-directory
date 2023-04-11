import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationStatus } from "./configurationstatus";
import { DisassociatedDataStorageStateEnum } from "./disassociateddatastoragestateenum";
import { MultiLayerStorage } from "./multilayerstorage";
import { RetentionPeriod } from "./retentionperiod";
import { StorageTypeEnum } from "./storagetypeenum";
/**
 * Success
 */
export declare class DescribeStorageConfigurationResponse extends SpeakeasyBase {
    /**
     * Contains current status information for the configuration.
     */
    configurationStatus: ConfigurationStatus;
    disassociatedDataStorage?: DisassociatedDataStorageStateEnum;
    lastUpdateDate?: Date;
    multiLayerStorage?: MultiLayerStorage;
    retentionPeriod?: RetentionPeriod;
    storageType: StorageTypeEnum;
}
