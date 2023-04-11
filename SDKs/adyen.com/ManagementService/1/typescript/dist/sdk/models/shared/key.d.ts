import { SpeakeasyBase } from "../../../internal/utils";
export declare class Key extends SpeakeasyBase {
    /**
     * The unique identifier of the shared key.
     */
    identifier?: string;
    /**
     * The secure passphrase to protect the shared key.
     */
    passphrase?: string;
    /**
     * The version number of the shared key.
     */
    version?: number;
}
