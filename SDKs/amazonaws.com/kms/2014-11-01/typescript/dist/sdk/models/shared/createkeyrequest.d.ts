import { SpeakeasyBase } from "../../../internal/utils";
import { KeySpecEnum } from "./keyspecenum";
import { KeyUsageTypeEnum } from "./keyusagetypeenum";
import { OriginTypeEnum } from "./origintypeenum";
import { Tag } from "./tag";
/**
 * <p>Instead, use the <code>KeySpec</code> parameter.</p> <p>The <code>KeySpec</code> and <code>CustomerMasterKeySpec</code> parameters work the same way. Only the names differ. We recommend that you use <code>KeySpec</code> parameter in your code. However, to avoid breaking changes, KMS supports both parameters.</p>This parameter has been deprecated. Instead, use the KeySpec parameter.
 */
export declare enum CreateKeyRequestCustomerMasterKeySpecEnum {
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
export declare class CreateKeyRequest extends SpeakeasyBase {
    bypassPolicyLockoutSafetyCheck?: boolean;
    customKeyStoreId?: string;
    customerMasterKeySpec?: CreateKeyRequestCustomerMasterKeySpecEnum;
    description?: string;
    keySpec?: KeySpecEnum;
    keyUsage?: KeyUsageTypeEnum;
    multiRegion?: boolean;
    origin?: OriginTypeEnum;
    policy?: string;
    tags?: Tag[];
    xksKeyId?: string;
}
