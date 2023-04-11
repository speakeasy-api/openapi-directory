import { SpeakeasyBase } from "../../../internal/utils";
export declare class ConnectionLog extends SpeakeasyBase {
    /**
     * If fail, contains the error code
     */
    error?: string;
    /**
     * If fail, error message received from connector
     */
    errorMessage?: string;
    /**
     * MD5 hash of the exception backtrace
     */
    errorUid?: string;
    /**
     * Fields for connection in additionalInformationNeeded state with background option
     */
    fields?: string;
    /**
     * ID of the log
     */
    id: number;
    /**
     * ID of the connection
     */
    idConnection: number;
    /**
     * ID of the connector
     */
    idConnector?: number;
    /**
     * ID of the related connection source
     */
    idSource?: number;
    /**
     * ID of the user
     */
    idUser?: number;
    /**
     * bcrypt hash of the login
     */
    login?: string;
    /**
     * In case of bank connection, number of accounts
     */
    nbAccounts?: number;
    /**
     * If fail, the date represents the next try to connect
     */
    nextTry?: Date;
    /**
     * Session folder uid
     */
    sessionFolderId?: string;
    /**
     * Timestamp when the synchronization has started
     */
    start?: Date;
    /**
     * Status of user (1 = charged user)
     */
    statut?: number;
    /**
     * Timestamp of log, when the synchronization has finished
     */
    timestamp: Date;
    /**
     * Worker used to do synchronization
     */
    worker?: string;
}
