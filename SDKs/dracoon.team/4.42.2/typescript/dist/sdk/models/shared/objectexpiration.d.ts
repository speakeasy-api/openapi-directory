import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Expiration information
 */
export declare class ObjectExpiration extends SpeakeasyBase {
    /**
     * enabled / disabled
     */
    enableExpiration: boolean;
    /**
     * Expiration date
     */
    expireAt?: Date;
}
