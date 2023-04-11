import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the webhook you created
 */
export declare class Webhook extends SpeakeasyBase {
    active?: boolean;
    contactEmailAddress?: string;
    id?: number;
    name?: string;
    onWebApp?: boolean;
    triggerScope?: string;
    url?: string;
}
