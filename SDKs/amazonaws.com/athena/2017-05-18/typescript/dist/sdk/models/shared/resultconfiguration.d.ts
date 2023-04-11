import { SpeakeasyBase } from "../../../internal/utils";
import { AclConfiguration } from "./aclconfiguration";
import { EncryptionConfiguration } from "./encryptionconfiguration";
/**
 * The location in Amazon S3 where query and calculation results are stored and the encryption option, if any, used for query and calculation results. These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the workgroup settings.
 */
export declare class ResultConfiguration extends SpeakeasyBase {
    aclConfiguration?: AclConfiguration;
    encryptionConfiguration?: EncryptionConfiguration;
    expectedBucketOwner?: string;
    outputLocation?: string;
}
