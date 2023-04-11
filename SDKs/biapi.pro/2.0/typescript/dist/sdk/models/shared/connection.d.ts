import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful DELETE on Connection resource
 */
export declare class Connection extends SpeakeasyBase {
    /**
     * This connection is active and will be automatically synced
     */
    active: boolean;
    /**
     * Creation date
     */
    created?: Date;
    /**
     * ID of connection
     */
    id: number;
    /**
     * ID of the related connector
     */
    idConnector: number;
    /**
     * ID of the related user
     */
    idUser?: number;
    /**
     * Last successful push
     */
    lastPush?: Date;
    /**
     * Last successful update
     */
    lastUpdate?: Date;
    /**
     * Date of next synchronization
     */
    nextTry?: Date;
}
