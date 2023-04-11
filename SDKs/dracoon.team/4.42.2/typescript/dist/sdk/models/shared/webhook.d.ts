import { SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";
/**
 * Webhook information
 */
export declare class Webhook extends SpeakeasyBase {
    /**
     * Creation date
     */
    createdAt: Date;
    /**
     * User information
     */
    createdBy?: UserInfo;
    /**
     * List of names of event types
     */
    eventTypeNames: string[];
    /**
     * Expiration date / time
     */
    expireAt: Date;
    /**
     * Last HTTP status code when a webhook is disabled due to delivery failures
     */
    failStatus?: number;
    /**
     * ID
     */
    id: number;
    /**
     * Is enabled
     */
    isEnabled: boolean;
    /**
     * Name
     */
    name: string;
    /**
     * Secret; used for event message signatures
     */
    secret?: string;
    /**
     * Modification date
     */
    updatedAt: Date;
    /**
     * User information
     */
    updatedBy?: UserInfo;
    /**
     * URL
     */
    url: string;
}
