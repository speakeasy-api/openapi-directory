import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionAlgorithmSpecEnum } from "./encryptionalgorithmspecenum";
import { KeySpecEnum } from "./keyspecenum";
import { KeyUsageTypeEnum } from "./keyusagetypeenum";
import { SigningAlgorithmSpecEnum } from "./signingalgorithmspecenum";
/**
 * <p>Instead, use the <code>KeySpec</code> field in the <code>GetPublicKey</code> response.</p> <p>The <code>KeySpec</code> and <code>CustomerMasterKeySpec</code> fields have the same value. We recommend that you use the <code>KeySpec</code> field in your code. However, to avoid breaking changes, KMS supports both fields.</p>This field has been deprecated. Instead, use the KeySpec field.
 */
export declare enum GetPublicKeyResponseCustomerMasterKeySpecEnum {
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
 * Success
 */
export declare class GetPublicKeyResponse extends SpeakeasyBase {
    customerMasterKeySpec?: GetPublicKeyResponseCustomerMasterKeySpecEnum;
    encryptionAlgorithms?: EncryptionAlgorithmSpecEnum[];
    keyId?: string;
    keySpec?: KeySpecEnum;
    keyUsage?: KeyUsageTypeEnum;
    publicKey?: string;
    signingAlgorithms?: SigningAlgorithmSpecEnum[];
}
