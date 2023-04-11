import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerContentEncryptionConfiguration } from "./customercontentencryptionconfiguration";
import { EngineVersion } from "./engineversion";
import { ResultConfiguration } from "./resultconfiguration";
/**
 * The configuration of the workgroup, which includes the location in Amazon S3 where query and calculation results are stored, the encryption option, if any, used for query and calculation results, whether the Amazon CloudWatch Metrics are enabled for the workgroup and whether workgroup settings override query settings, and the data usage limits for the amount of data scanned per query or per workgroup. The workgroup settings override is specified in <code>EnforceWorkGroupConfiguration</code> (true/false) in the <code>WorkGroupConfiguration</code>. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.
 */
export declare class WorkGroupConfiguration extends SpeakeasyBase {
    additionalConfiguration?: string;
    bytesScannedCutoffPerQuery?: number;
    customerContentEncryptionConfiguration?: CustomerContentEncryptionConfiguration;
    enableMinimumEncryptionConfiguration?: boolean;
    enforceWorkGroupConfiguration?: boolean;
    engineVersion?: EngineVersion;
    executionRole?: string;
    publishCloudWatchMetricsEnabled?: boolean;
    requesterPaysEnabled?: boolean;
    resultConfiguration?: ResultConfiguration;
}
