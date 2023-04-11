import { SpeakeasyBase } from "../../../internal/utils";
import { UserKeyPairContainer } from "./userkeypaircontainer";
/**
 * Request model for enabling customer encryption
 */
export declare class EnableCustomerEncryptionRequest extends SpeakeasyBase {
    /**
     * Key pair container
     */
    dataSpaceRescueKey: UserKeyPairContainer;
    /**
     * Set `true` to enable encryption for this customer
     */
    enableCustomerEncryption: boolean;
}
