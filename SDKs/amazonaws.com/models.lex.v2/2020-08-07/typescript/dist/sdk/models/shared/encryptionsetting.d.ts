import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The object representing the passwords that were used to encrypt the data related to the bot recommendation, as well as the KMS key ARN used to encrypt the associated metadata.
 */
export declare class EncryptionSetting extends SpeakeasyBase {
    associatedTranscriptsPassword?: string;
    botLocaleExportPassword?: string;
    kmsKeyArn?: string;
}
