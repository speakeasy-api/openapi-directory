import { SpeakeasyBase } from "../../../internal/utils";
import { RevealStatusEnum } from "./revealstatusenum";
/**
 * Specifies the configuration settings for retrieving occurrences of sensitive data reported by findings, and the status of the configuration for an Amazon Macie account. When you enable the configuration for the first time, your request must specify an Key Management Service (KMS) key. Otherwise, an error occurs. Macie uses the specified key to encrypt the sensitive data that you retrieve.
 */
export declare class RevealConfiguration extends SpeakeasyBase {
    kmsKeyId?: string;
    status: RevealStatusEnum;
}
