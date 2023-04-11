import { SpeakeasyBase } from "../../../internal/utils";
import { AclConfiguration } from "./aclconfiguration";
import { EncryptionConfiguration } from "./encryptionconfiguration";
/**
 * The information about the updates in the query results, such as output location and encryption configuration for the query results.
 */
export declare class ResultConfigurationUpdates extends SpeakeasyBase {
    aclConfiguration?: AclConfiguration;
    encryptionConfiguration?: EncryptionConfiguration;
    expectedBucketOwner?: string;
    outputLocation?: string;
    removeAclConfiguration?: boolean;
    removeEncryptionConfiguration?: boolean;
    removeExpectedBucketOwner?: boolean;
    removeOutputLocation?: boolean;
}
