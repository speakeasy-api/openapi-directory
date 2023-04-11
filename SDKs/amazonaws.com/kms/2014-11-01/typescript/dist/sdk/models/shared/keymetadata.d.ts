import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionAlgorithmSpecEnum } from "./encryptionalgorithmspecenum";
import { ExpirationModelTypeEnum } from "./expirationmodeltypeenum";
import { KeyManagerTypeEnum } from "./keymanagertypeenum";
import { KeySpecEnum } from "./keyspecenum";
import { KeyStateEnum } from "./keystateenum";
import { KeyUsageTypeEnum } from "./keyusagetypeenum";
import { MacAlgorithmSpecEnum } from "./macalgorithmspecenum";
import { MultiRegionConfiguration } from "./multiregionconfiguration";
import { OriginTypeEnum } from "./origintypeenum";
import { SigningAlgorithmSpecEnum } from "./signingalgorithmspecenum";
import { XksKeyConfigurationType } from "./xkskeyconfigurationtype";
/**
 * <p>Instead, use the <code>KeySpec</code> field.</p> <p>The <code>KeySpec</code> and <code>CustomerMasterKeySpec</code> fields have the same value. We recommend that you use the <code>KeySpec</code> field in your code. However, to avoid breaking changes, KMS supports both fields.</p>This field has been deprecated. Instead, use the KeySpec field.
 */
export declare enum KeyMetadataCustomerMasterKeySpecEnum {
    Rsa2048 = "RSA_2048",
    Rsa3072 = "RSA_3072",
    Rsa4096 = "RSA_4096",
    EccNistP256 = "ECC_NIST_P256",
    EccNistP384 = "ECC_NIST_P384",
    EccNistP521 = "ECC_NIST_P521",
    EccSecgP256K1 = "ECC_SECG_P256K1",
    SymmetricDefault = "SYMMETRIC_DEFAULT",
    Hmac224 = "HMAC_224",
    Hmac256 = "HMAC_256",
    Hmac384 = "HMAC_384",
    Hmac512 = "HMAC_512",
    Sm2 = "SM2"
}
/**
 * <p>Contains metadata about a KMS key.</p> <p>This data type is used as a response element for the <a>CreateKey</a>, <a>DescribeKey</a>, and <a>ReplicateKey</a> operations.</p>
 */
export declare class KeyMetadata extends SpeakeasyBase {
    awsAccountId?: string;
    arn?: string;
    cloudHsmClusterId?: string;
    creationDate?: Date;
    customKeyStoreId?: string;
    customerMasterKeySpec?: KeyMetadataCustomerMasterKeySpecEnum;
    deletionDate?: Date;
    description?: string;
    enabled?: boolean;
    encryptionAlgorithms?: EncryptionAlgorithmSpecEnum[];
    expirationModel?: ExpirationModelTypeEnum;
    keyId: string;
    keyManager?: KeyManagerTypeEnum;
    keySpec?: KeySpecEnum;
    keyState?: KeyStateEnum;
    keyUsage?: KeyUsageTypeEnum;
    macAlgorithms?: MacAlgorithmSpecEnum[];
    multiRegion?: boolean;
    multiRegionConfiguration?: MultiRegionConfiguration;
    origin?: OriginTypeEnum;
    pendingDeletionWindowInDays?: number;
    signingAlgorithms?: SigningAlgorithmSpecEnum[];
    validTo?: Date;
    xksKeyConfiguration?: XksKeyConfigurationType;
}
