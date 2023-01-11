package openapisdk.models.shared;



/**
 * ConnectionPoolConfigurationInfo
 * Displays the settings that control the size and behavior of the connection pool associated with a <code>DBProxyTarget</code>.
**/
public class ConnectionPoolConfigurationInfo {
    public Long connectionBorrowTimeout;
    public ConnectionPoolConfigurationInfo withConnectionBorrowTimeout(Long connectionBorrowTimeout) {
        this.connectionBorrowTimeout = connectionBorrowTimeout;
        return this;
    }
    public String initQuery;
    public ConnectionPoolConfigurationInfo withInitQuery(String initQuery) {
        this.initQuery = initQuery;
        return this;
    }
    public Long maxConnectionsPercent;
    public ConnectionPoolConfigurationInfo withMaxConnectionsPercent(Long maxConnectionsPercent) {
        this.maxConnectionsPercent = maxConnectionsPercent;
        return this;
    }
    public Long maxIdleConnectionsPercent;
    public ConnectionPoolConfigurationInfo withMaxIdleConnectionsPercent(Long maxIdleConnectionsPercent) {
        this.maxIdleConnectionsPercent = maxIdleConnectionsPercent;
        return this;
    }
    public String[] sessionPinningFilters;
    public ConnectionPoolConfigurationInfo withSessionPinningFilters(String[] sessionPinningFilters) {
        this.sessionPinningFilters = sessionPinningFilters;
        return this;
    }
}