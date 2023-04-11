import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful DELETE on Webhook resource
 */
export declare class Webhook extends SpeakeasyBase {
    /**
     * json value to describe data to add
     */
    addToData?: string;
    /**
     * Date of the webhook creation
     */
    created: Date;
    /**
     * Date of the webhook deletion
     */
    deleted?: Date;
    /**
     * json value to store last related webhook data flushing fail
     */
    flushFail?: string;
    /**
     * ID of the webhook
     */
    id: number;
    /**
     * ID of the authentication process
     */
    idAuth?: number;
    /**
     * ID of the webhook event
     */
    idEvent?: number;
    /**
     * ID of the service
     */
    idService?: number;
    /**
     * ID of the emitter user
     */
    idUser?: number;
    /**
     * Date of the webhook last update
     */
    updated: Date;
    /**
     * URL of the webhook
     */
    url?: string;
}
