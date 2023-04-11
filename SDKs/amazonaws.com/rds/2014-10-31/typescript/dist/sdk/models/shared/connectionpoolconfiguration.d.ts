import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the settings that control the size and behavior of the connection pool associated with a <code>DBProxyTargetGroup</code>.
 */
export declare class ConnectionPoolConfiguration extends SpeakeasyBase {
    connectionBorrowTimeout?: number;
    initQuery?: string;
    maxConnectionsPercent?: number;
    maxIdleConnectionsPercent?: number;
    sessionPinningFilters?: string[];
}
