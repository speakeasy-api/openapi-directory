import { SpeakeasyBase } from "../../../internal/utils";
import { PrivateKeyContainer } from "./privatekeycontainer";
import { PublicKeyContainer } from "./publickeycontainer";
/**
 * Request model for creating a key pair
 */
export declare class CreateKeyPairRequest extends SpeakeasyBase {
    /**
     * Private key container
     */
    previousPrivateKey: PrivateKeyContainer;
    /**
     * Private key container
     */
    privateKeyContainer: PrivateKeyContainer;
    /**
     * Public key container
     */
    publicKeyContainer: PublicKeyContainer;
}
