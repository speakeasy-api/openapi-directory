import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Operation status:
 *
 * @remarks
 *
 * * `0` - Success
 *
 * * `2` - Error
 */
export declare enum LogEventStatusEnum {
    Zero = "0",
    Two = "2"
}
/**
 * Log event information
 */
export declare class LogEvent extends SpeakeasyBase {
    /**
     * Attribute 1
     */
    attribute1?: string;
    /**
     * Attribute 2
     */
    attribute2?: string;
    /**
     * Attribute 3
     */
    attribute3?: string;
    /**
     * Auth parent source ID
     */
    authParentSource?: string;
    /**
     * Auth parent target ID
     */
    authParentTarget?: string;
    /**
     * Unique identifier for the customer
     */
    customerId?: number;
    /**
     * Event ID
     */
    id: number;
    /**
     * Event description
     */
    message: string;
    /**
     * Object ID 1
     */
    objectId1?: number;
    /**
     * Object ID 2
     */
    objectId2?: number;
    /**
     * Object name 1
     */
    objectName1?: string;
    /**
     * Object name 2
     */
    objectName2?: string;
    /**
     * Object type 1
     */
    objectType1?: number;
    /**
     * Object type 2
     */
    objectType2?: number;
    /**
     * Operation type ID
     */
    operationId?: number;
    /**
     * Operation name
     */
    operationName?: string;
    /**
     * Operation status:
     *
     * @remarks
     *
     * * `0` - Success
     *
     * * `2` - Error
     */
    status?: LogEventStatusEnum;
    /**
     * Event timestamp
     */
    time: Date;
    /**
     * Client
     */
    userClient?: string;
    /**
     * Unique identifier for the user
     */
    userId: number;
    /**
     * User IP
     */
    userIp?: string;
    /**
     * Username
     */
    userName?: string;
}
