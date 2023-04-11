import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerContentEncryptionConfiguration } from "./customercontentencryptionconfiguration";
import { EngineVersion } from "./engineversion";
import { ResultConfigurationUpdates } from "./resultconfigurationupdates";
/**
 * The configuration information that will be updated for this workgroup, which includes the location in Amazon S3 where query and calculation results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup, whether the workgroup settings override the client-side settings, and the data usage limit for the amount of bytes scanned per query, if it is specified.
 */
export declare class WorkGroupConfigurationUpdates extends SpeakeasyBase {
    additionalConfiguration?: string;
    bytesScannedCutoffPerQuery?: number;
    /**
     * Specifies the KMS key that is used to encrypt the user's data stores in Athena.
     */
    customerContentEncryptionConfiguration?: CustomerContentEncryptionConfiguration;
    enableMinimumEncryptionConfiguration?: boolean;
    enforceWorkGroupConfiguration?: boolean;
    engineVersion?: EngineVersion;
    executionRole?: string;
    publishCloudWatchMetricsEnabled?: boolean;
    removeBytesScannedCutoffPerQuery?: boolean;
    removeCustomerContentEncryptionConfiguration?: boolean;
    requesterPaysEnabled?: boolean;
    resultConfigurationUpdates?: ResultConfigurationUpdates;
}
