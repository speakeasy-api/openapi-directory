import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class KeyPairTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a key pair.
 */
export declare class KeyPair extends SpeakeasyBase {
    keyFingerprint?: string;
    keyMaterial?: string;
    keyName?: string;
    keyPairId?: string;
    tags?: KeyPairTags[];
}
