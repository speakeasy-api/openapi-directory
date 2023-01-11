import { SpeakeasyBase } from "../../../internal/utils";
import { SourceTypeEnum } from "./sourcetypeenum";
/**
 * The reporting related to a change order operation
**/
export declare class ChangeOrderReporting extends SpeakeasyBase {
    changeOrderType?: string;
    creationUtcDate?: Date;
    details?: Record<string, Record<string, any>>;
    errorMessage?: string;
    executionUUID?: string;
    ipAddress?: string;
    lastUpdateUtcDate?: Date;
    processingStatus?: string;
    sourceType?: SourceTypeEnum;
    sourceUserId?: string;
    sourceUserName?: string;
    testMode?: boolean;
}
