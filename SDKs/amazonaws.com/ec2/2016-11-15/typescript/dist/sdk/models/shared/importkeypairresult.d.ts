import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class ImportKeyPairResultTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Success
 */
export declare class ImportKeyPairResult extends SpeakeasyBase {
    keyFingerprint?: string;
    keyName?: string;
    keyPairId?: string;
    tags?: ImportKeyPairResultTags[];
}
