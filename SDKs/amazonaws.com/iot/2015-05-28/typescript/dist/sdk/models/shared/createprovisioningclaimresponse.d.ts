import { SpeakeasyBase } from "../../../internal/utils";
import { KeyPair } from "./keypair";
/**
 * Success
 */
export declare class CreateProvisioningClaimResponse extends SpeakeasyBase {
    certificateId?: string;
    certificatePem?: string;
    expiration?: Date;
    keyPair?: KeyPair;
}
