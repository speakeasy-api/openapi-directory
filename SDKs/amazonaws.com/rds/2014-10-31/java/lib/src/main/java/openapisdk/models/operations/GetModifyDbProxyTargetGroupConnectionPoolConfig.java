package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * GetModifyDbProxyTargetGroupConnectionPoolConfig
 * Specifies the settings that control the size and behavior of the connection pool associated with a <code>DBProxyTargetGroup</code>.
**/
public class GetModifyDbProxyTargetGroupConnectionPoolConfig {
    @SpeakeasyMetadata("queryParam:name=ConnectionBorrowTimeout")
    public Long connectionBorrowTimeout;
    public GetModifyDbProxyTargetGroupConnectionPoolConfig withConnectionBorrowTimeout(Long connectionBorrowTimeout) {
        this.connectionBorrowTimeout = connectionBorrowTimeout;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=InitQuery")
    public String initQuery;
    public GetModifyDbProxyTargetGroupConnectionPoolConfig withInitQuery(String initQuery) {
        this.initQuery = initQuery;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=MaxConnectionsPercent")
    public Long maxConnectionsPercent;
    public GetModifyDbProxyTargetGroupConnectionPoolConfig withMaxConnectionsPercent(Long maxConnectionsPercent) {
        this.maxConnectionsPercent = maxConnectionsPercent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=MaxIdleConnectionsPercent")
    public Long maxIdleConnectionsPercent;
    public GetModifyDbProxyTargetGroupConnectionPoolConfig withMaxIdleConnectionsPercent(Long maxIdleConnectionsPercent) {
        this.maxIdleConnectionsPercent = maxIdleConnectionsPercent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=SessionPinningFilters")
    public String[] sessionPinningFilters;
    public GetModifyDbProxyTargetGroupConnectionPoolConfig withSessionPinningFilters(String[] sessionPinningFilters) {
        this.sessionPinningFilters = sessionPinningFilters;
        return this;
    }
}