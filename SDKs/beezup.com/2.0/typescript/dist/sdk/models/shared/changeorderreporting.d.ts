import { SpeakeasyBase } from "../../../internal/utils";
import { SourceTypeEnum } from "./sourcetypeenum";
/**
 * The reporting related to a change order operation
 */
export declare class ChangeOrderReporting extends SpeakeasyBase {
    changeOrderType?: string;
    /**
     * The creation UTC date of the execution
     */
    creationUtcDate?: Date;
    details?: Record<string, Record<string, any>>;
    /**
     * The error message during the execution
     */
    errorMessage?: string;
    /**
     * The execution identifier
     */
    executionUUID?: string;
    /**
     * The IP address who request this operation
     */
    ipAddress?: string;
    /**
     * The last update UTC date of the execution
     */
    lastUpdateUtcDate?: Date;
    /**
     * The processing status of the execution
     */
    processingStatus?: string;
    /**
     * Indicates the origin of the operation
     */
    sourceType?: SourceTypeEnum;
    /**
     * The user identifier
     */
    sourceUserId?: string;
    sourceUserName?: string;
    /**
     * This operation was a test
     */
    testMode?: boolean;
}
