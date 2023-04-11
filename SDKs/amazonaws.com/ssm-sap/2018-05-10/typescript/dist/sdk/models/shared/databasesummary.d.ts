import { SpeakeasyBase } from "../../../internal/utils";
import { DatabaseTypeEnum } from "./databasetypeenum";
/**
 * The summary of the database.
 */
export declare class DatabaseSummary extends SpeakeasyBase {
    applicationId?: string;
    arn?: string;
    componentId?: string;
    databaseId?: string;
    databaseType?: DatabaseTypeEnum;
    tags?: Record<string, string>;
}
