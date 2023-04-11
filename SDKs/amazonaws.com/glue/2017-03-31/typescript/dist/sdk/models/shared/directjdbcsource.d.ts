import { SpeakeasyBase } from "../../../internal/utils";
import { JDBCConnectionTypeEnum } from "./jdbcconnectiontypeenum";
/**
 * Specifies the direct JDBC source connection.
 */
export declare class DirectJDBCSource extends SpeakeasyBase {
    connectionName: string;
    connectionType: JDBCConnectionTypeEnum;
    database: string;
    name: string;
    redshiftTmpDir?: string;
    table: string;
}
