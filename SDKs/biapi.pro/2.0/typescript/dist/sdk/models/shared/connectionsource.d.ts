import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful DELETE on ConnectionSource resource
 */
export declare class ConnectionSource extends SpeakeasyBase {
    /**
     * Expiration date of the access
     */
    accessExpire?: Date;
    /**
     * Creation date of the connection source
     */
    created: Date;
    /**
     * This source is not used to synchronize the connection
     */
    disabled?: Date;
    /**
     * Expiration of the connection source. Used to purge the connection in case completion was not finished
     */
    expire?: Date;
    /**
     * ID of connection
     */
    id: number;
    /**
     * ID of the related connection
     */
    idConnection: number;
    /**
     * ID of the related connector source
     */
    idConnectorSource: number;
    /**
     * Last successful update
     */
    lastUpdate?: Date;
    /**
     * Name of the connection source
     */
    name: string;
    /**
     * Date of next synchronization
     */
    nextTry?: Date;
    /**
     * If the last update has failed, the state code
     */
    state?: string;
}
