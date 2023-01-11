package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListConnectorsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=connectorNamePrefix")
    public String connectorNamePrefix;
    public ListConnectorsQueryParams withConnectorNamePrefix(String connectorNamePrefix) {
        this.connectorNamePrefix = connectorNamePrefix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListConnectorsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListConnectorsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}