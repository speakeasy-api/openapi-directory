import { SpeakeasyBase } from "../../../internal/utils";
import { PrivateKeyContainer } from "./privatekeycontainer";
import { PublicKeyContainer } from "./publickeycontainer";
/**
 * Key pair container
 */
export declare class UserKeyPairContainer extends SpeakeasyBase {
    /**
     * Private key container
     */
    privateKeyContainer: PrivateKeyContainer;
    /**
     * Public key container
     */
    publicKeyContainer: PublicKeyContainer;
}
