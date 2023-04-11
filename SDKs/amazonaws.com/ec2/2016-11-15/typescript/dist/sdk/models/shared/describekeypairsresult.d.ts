import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of key pair.
 */
export declare enum DescribeKeyPairsResultKeyPairsKeyTypeEnum {
    Rsa = "rsa",
    Ed25519 = "ed25519"
}
/**
 * Describes a tag.
 */
export declare class DescribeKeyPairsResultKeyPairsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a key pair.
 */
export declare class DescribeKeyPairsResultKeyPairs extends SpeakeasyBase {
    createTime?: Date;
    keyFingerprint?: string;
    keyName?: string;
    keyPairId?: string;
    keyType?: DescribeKeyPairsResultKeyPairsKeyTypeEnum;
    publicKey?: string;
    tags?: DescribeKeyPairsResultKeyPairsTags[];
}
/**
 * Success
 */
export declare class DescribeKeyPairsResult extends SpeakeasyBase {
    keyPairs?: DescribeKeyPairsResultKeyPairs[];
}
