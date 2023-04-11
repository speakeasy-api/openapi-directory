import { SpeakeasyBase } from "../../../internal/utils";
import { PublicKeyContainer } from "./publickeycontainer";
/**
 * Public key information
 */
export declare class UserUserPublicKey extends SpeakeasyBase {
    /**
     * Unique identifier for the user
     */
    id?: number;
    /**
     * Public key container
     */
    publicKeyContainer?: PublicKeyContainer;
}
