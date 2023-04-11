import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationCredential } from "./applicationcredential";
import { DatabaseStatusEnum } from "./databasestatusenum";
import { DatabaseTypeEnum } from "./databasetypeenum";
/**
 * The SAP HANA database of the application registered with AWS Systems Manager for SAP.
 */
export declare class Database extends SpeakeasyBase {
    applicationId?: string;
    arn?: string;
    componentId?: string;
    credentials?: ApplicationCredential[];
    databaseId?: string;
    databaseName?: string;
    databaseType?: DatabaseTypeEnum;
    lastUpdated?: Date;
    primaryHost?: string;
    sqlPort?: number;
    status?: DatabaseStatusEnum;
}
