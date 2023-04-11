import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  <b>[Event-based policies only]</b> Specifies the encryption settings for cross-Region snapshot copies created by event-based policies.
 */
export declare class EncryptionConfiguration extends SpeakeasyBase {
    cmkArn?: string;
    encrypted: boolean;
}
