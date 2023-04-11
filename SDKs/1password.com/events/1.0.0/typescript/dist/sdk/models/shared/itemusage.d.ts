import { SpeakeasyBase } from "../../../internal/utils";
import { Client } from "./client";
import { User } from "./user";
/**
 * A single item usage object
 */
export declare class ItemUsage extends SpeakeasyBase {
    action?: any;
    /**
     * Metadata gathered about the client
     */
    client?: Client;
    itemUuid?: string;
    timestamp?: Date;
    usedVersion?: number;
    /**
     * User object
     */
    user?: User;
    uuid?: string;
    vaultUuid?: string;
}
