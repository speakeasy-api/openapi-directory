import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Private key container
 */
export declare class PrivateKeyContainer extends SpeakeasyBase {
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
     * Private key
     */
    privateKey: string;
    /**
     * Version
     */
    version: string;
}
