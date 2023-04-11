import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Public key container
 */
export declare class PublicKeyContainer extends SpeakeasyBase {
    /**
     * &#128640; Since v4.24.0
     *
     * @remarks
     *
     * Creation date
     */
    createdAt?: Date;
    /**
     * &#128640; Since v4.24.0
     *
     * @remarks
     *
     * Created by user
     */
    createdBy?: number;
    /**
     * Public key
     */
    publicKey: string;
    /**
     * Version
     */
    version: string;
}
